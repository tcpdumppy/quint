import { describe, it } from 'mocha'
import { assert } from 'chai'
import { newIdGenerator } from '../../src/idGenerator'
import { generateFreshIds } from '../../src/ir/idRefresher'
import { SourceLookupPath } from '../../src/parsing/sourceResolver'
import { parse } from '../../src/parsing/quintParserFrontend'
import { analyzeModules } from '../../src/quintAnalyzer'
import { collectIds } from '../util'

describe('generateFreshIds', () => {
  // Generate ids starting from 100, so that we can easily distinguish them from
  // the ids generated in the parser
  const mockGenerator = newIdGenerator(100n)

  const defs = [
    'var a: int',
    'const N: int',
    'type MY_TYPE = int',
    'assume _ = N > 1',
    'val f = Set(1, 2).filter(x => x > 1)',
    'def l = val x = false { x }',
  ]

  const idGenerator = newIdGenerator()
  const fake_path: SourceLookupPath = { normalizedPath: 'fake_path', toSourceName: () => 'fake_path' }

  const quintModules: string = `module A { ${defs.join('\n')} }`

  const parseResult = parse(idGenerator, 'fake_location', fake_path, quintModules)
  if (parseResult.isLeft()) {
    it('should parse the mocked up module', () => {
      assert.fail(`Failed to parse mocked up module. Errors: ${parseResult.value.map(e => e.explanation).join('\n')}`)
    })
  }
  const { modules, table, sourceMap } = parseResult.unwrap()
  const [module] = modules

  const [analysisErrors, analysisOutput] = analyzeModules(table, modules)
  it('should analyze the mocked up module', () => {
    assert.isEmpty(analysisErrors)
  })

  const result = module.defs.map(def => generateFreshIds(def, mockGenerator, sourceMap, analysisOutput))
  const newModule = { ...module, defs: result, id: 200n }

  it('does not repeat ids', () => {
    const ids = collectIds(newModule)
    assert.isTrue(
      ids.every(id => id >= 100n),
      'ids should be greater than 100 if they were generated by the mock generator'
    )
    assert.sameDeepMembers(ids, [...new Set(ids)])
  })

  it('adds new entries to the source map', () => {
    assert.includeDeepMembers(
      [...sourceMap.keys()],
      newModule.defs.map(def => def.id)
    )
  })

  it('adds new entries to the types map', () => {
    assert.includeDeepMembers(
      [...analysisOutput.types.keys()],
      newModule.defs.filter(def => def.kind !== 'typedef').map(def => def.id)
    )
  })
})
