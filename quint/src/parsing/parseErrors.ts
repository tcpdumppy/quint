import { QuintError } from '../quintError'

export function lowercaseTypeError(id: bigint, name: string): QuintError {
  return {
    code: 'QNT007',
    message: 'type names must start with an uppercase letter',
    reference: id,
    data: name[0].match('[a-z]')
      ? {
          fix: {
            kind: 'replace',
            original: `type ${name[0]}`,
            replacement: `type ${name[0].toUpperCase()}`,
          },
        }
      : {},
  }
}

export function tooManySpreadsError(id: bigint): QuintError {
  return {
    code: 'QNT012',
    message: '... may be used once in { ...record, <fields> }',
    reference: id,
    data: {},
  }
}

export function undeclaredTypeParamsError(id: bigint, unboundTypeVariables: string[]): QuintError {
  return {
    code: 'QNT014',
    message: `the type variables ${unboundTypeVariables.join(', ')} are unbound.
E.g., in

   type T = List[a]

type variable 'a' is unbound. To fix it, write

   type T[a] = List[a]`,
    reference: id,
    data: {},
  }
}
