// Generated from ./src/generated/Tnt.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { TypeFunContext, TypeOperContext, TypeSetContext, TypeSeqContext, TypeTupleContext, TypeRecContext, TypeUnionRecContext, TypeIntContext, TypeStrContext, TypeBoolContext, TypeConstOrVarContext, TypeParenContext, ConstContext, VarContext, AssumeContext, ValContext, OperContext, PatContext, ModuleNestedContext, InstanceContext, TypeDefContext, ErrorCaseContext, LambdaOneContext, LambdaManyContext, DotCallContext, OperAppContext, FunAppContext, UminusContext, PowContext, MultDivContext, PlusMinusContext, IfElseContext, CaseBlockContext, InfixCallContext, RelationsContext, AndContext, OrContext, IffContext, ImpliesContext, AndBlockContext, OrBlockContext, LiteralOrIdContext, TupleContext, RecordContext, RecordSetContext, SequenceContext, LetInContext, ParenContext, LambdaOrBracesContext, ModuleContext, UnitContext, ValDefContext, OperDefContext, InstanceDefContext, ParamsContext, TypeContext, TypeUnionRecOneContext, ExprContext, LambdaContext, IdentOrHoleContext, Arg_listContext, Name_after_dotContext, OperatorContext, LiteralContext } from './TntParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `TntParser`.
 */
export interface TntListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `typeFun`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeFun?: (ctx: TypeFunContext) => void;
	/**
	 * Exit a parse tree produced by the `typeFun`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeFun?: (ctx: TypeFunContext) => void;

	/**
	 * Enter a parse tree produced by the `typeOper`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeOper?: (ctx: TypeOperContext) => void;
	/**
	 * Exit a parse tree produced by the `typeOper`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeOper?: (ctx: TypeOperContext) => void;

	/**
	 * Enter a parse tree produced by the `typeSet`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeSet?: (ctx: TypeSetContext) => void;
	/**
	 * Exit a parse tree produced by the `typeSet`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeSet?: (ctx: TypeSetContext) => void;

	/**
	 * Enter a parse tree produced by the `typeSeq`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeSeq?: (ctx: TypeSeqContext) => void;
	/**
	 * Exit a parse tree produced by the `typeSeq`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeSeq?: (ctx: TypeSeqContext) => void;

	/**
	 * Enter a parse tree produced by the `typeTuple`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeTuple?: (ctx: TypeTupleContext) => void;
	/**
	 * Exit a parse tree produced by the `typeTuple`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeTuple?: (ctx: TypeTupleContext) => void;

	/**
	 * Enter a parse tree produced by the `typeRec`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeRec?: (ctx: TypeRecContext) => void;
	/**
	 * Exit a parse tree produced by the `typeRec`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeRec?: (ctx: TypeRecContext) => void;

	/**
	 * Enter a parse tree produced by the `typeUnionRec`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeUnionRec?: (ctx: TypeUnionRecContext) => void;
	/**
	 * Exit a parse tree produced by the `typeUnionRec`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeUnionRec?: (ctx: TypeUnionRecContext) => void;

	/**
	 * Enter a parse tree produced by the `typeInt`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeInt?: (ctx: TypeIntContext) => void;
	/**
	 * Exit a parse tree produced by the `typeInt`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeInt?: (ctx: TypeIntContext) => void;

	/**
	 * Enter a parse tree produced by the `typeStr`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeStr?: (ctx: TypeStrContext) => void;
	/**
	 * Exit a parse tree produced by the `typeStr`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeStr?: (ctx: TypeStrContext) => void;

	/**
	 * Enter a parse tree produced by the `typeBool`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeBool?: (ctx: TypeBoolContext) => void;
	/**
	 * Exit a parse tree produced by the `typeBool`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeBool?: (ctx: TypeBoolContext) => void;

	/**
	 * Enter a parse tree produced by the `typeConstOrVar`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeConstOrVar?: (ctx: TypeConstOrVarContext) => void;
	/**
	 * Exit a parse tree produced by the `typeConstOrVar`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeConstOrVar?: (ctx: TypeConstOrVarContext) => void;

	/**
	 * Enter a parse tree produced by the `typeParen`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeParen?: (ctx: TypeParenContext) => void;
	/**
	 * Exit a parse tree produced by the `typeParen`
	 * labeled alternative in `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeParen?: (ctx: TypeParenContext) => void;

	/**
	 * Enter a parse tree produced by the `const`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterConst?: (ctx: ConstContext) => void;
	/**
	 * Exit a parse tree produced by the `const`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitConst?: (ctx: ConstContext) => void;

	/**
	 * Enter a parse tree produced by the `var`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by the `var`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by the `assume`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterAssume?: (ctx: AssumeContext) => void;
	/**
	 * Exit a parse tree produced by the `assume`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitAssume?: (ctx: AssumeContext) => void;

	/**
	 * Enter a parse tree produced by the `val`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterVal?: (ctx: ValContext) => void;
	/**
	 * Exit a parse tree produced by the `val`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitVal?: (ctx: ValContext) => void;

	/**
	 * Enter a parse tree produced by the `oper`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterOper?: (ctx: OperContext) => void;
	/**
	 * Exit a parse tree produced by the `oper`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitOper?: (ctx: OperContext) => void;

	/**
	 * Enter a parse tree produced by the `pat`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterPat?: (ctx: PatContext) => void;
	/**
	 * Exit a parse tree produced by the `pat`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitPat?: (ctx: PatContext) => void;

	/**
	 * Enter a parse tree produced by the `moduleNested`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterModuleNested?: (ctx: ModuleNestedContext) => void;
	/**
	 * Exit a parse tree produced by the `moduleNested`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitModuleNested?: (ctx: ModuleNestedContext) => void;

	/**
	 * Enter a parse tree produced by the `instance`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterInstance?: (ctx: InstanceContext) => void;
	/**
	 * Exit a parse tree produced by the `instance`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitInstance?: (ctx: InstanceContext) => void;

	/**
	 * Enter a parse tree produced by the `typeDef`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterTypeDef?: (ctx: TypeDefContext) => void;
	/**
	 * Exit a parse tree produced by the `typeDef`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitTypeDef?: (ctx: TypeDefContext) => void;

	/**
	 * Enter a parse tree produced by the `errorCase`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterErrorCase?: (ctx: ErrorCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `errorCase`
	 * labeled alternative in `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitErrorCase?: (ctx: ErrorCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `lambdaOne`
	 * labeled alternative in `TntParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambdaOne?: (ctx: LambdaOneContext) => void;
	/**
	 * Exit a parse tree produced by the `lambdaOne`
	 * labeled alternative in `TntParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambdaOne?: (ctx: LambdaOneContext) => void;

	/**
	 * Enter a parse tree produced by the `lambdaMany`
	 * labeled alternative in `TntParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambdaMany?: (ctx: LambdaManyContext) => void;
	/**
	 * Exit a parse tree produced by the `lambdaMany`
	 * labeled alternative in `TntParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambdaMany?: (ctx: LambdaManyContext) => void;

	/**
	 * Enter a parse tree produced by the `dotCall`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDotCall?: (ctx: DotCallContext) => void;
	/**
	 * Exit a parse tree produced by the `dotCall`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDotCall?: (ctx: DotCallContext) => void;

	/**
	 * Enter a parse tree produced by the `operApp`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOperApp?: (ctx: OperAppContext) => void;
	/**
	 * Exit a parse tree produced by the `operApp`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOperApp?: (ctx: OperAppContext) => void;

	/**
	 * Enter a parse tree produced by the `funApp`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunApp?: (ctx: FunAppContext) => void;
	/**
	 * Exit a parse tree produced by the `funApp`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunApp?: (ctx: FunAppContext) => void;

	/**
	 * Enter a parse tree produced by the `uminus`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUminus?: (ctx: UminusContext) => void;
	/**
	 * Exit a parse tree produced by the `uminus`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUminus?: (ctx: UminusContext) => void;

	/**
	 * Enter a parse tree produced by the `pow`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterPow?: (ctx: PowContext) => void;
	/**
	 * Exit a parse tree produced by the `pow`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitPow?: (ctx: PowContext) => void;

	/**
	 * Enter a parse tree produced by the `multDiv`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMultDiv?: (ctx: MultDivContext) => void;
	/**
	 * Exit a parse tree produced by the `multDiv`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMultDiv?: (ctx: MultDivContext) => void;

	/**
	 * Enter a parse tree produced by the `plusMinus`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterPlusMinus?: (ctx: PlusMinusContext) => void;
	/**
	 * Exit a parse tree produced by the `plusMinus`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitPlusMinus?: (ctx: PlusMinusContext) => void;

	/**
	 * Enter a parse tree produced by the `ifElse`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIfElse?: (ctx: IfElseContext) => void;
	/**
	 * Exit a parse tree produced by the `ifElse`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIfElse?: (ctx: IfElseContext) => void;

	/**
	 * Enter a parse tree produced by the `caseBlock`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCaseBlock?: (ctx: CaseBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `caseBlock`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCaseBlock?: (ctx: CaseBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `infixCall`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInfixCall?: (ctx: InfixCallContext) => void;
	/**
	 * Exit a parse tree produced by the `infixCall`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInfixCall?: (ctx: InfixCallContext) => void;

	/**
	 * Enter a parse tree produced by the `relations`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRelations?: (ctx: RelationsContext) => void;
	/**
	 * Exit a parse tree produced by the `relations`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRelations?: (ctx: RelationsContext) => void;

	/**
	 * Enter a parse tree produced by the `and`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by the `and`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;

	/**
	 * Enter a parse tree produced by the `or`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOr?: (ctx: OrContext) => void;
	/**
	 * Exit a parse tree produced by the `or`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOr?: (ctx: OrContext) => void;

	/**
	 * Enter a parse tree produced by the `iff`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIff?: (ctx: IffContext) => void;
	/**
	 * Exit a parse tree produced by the `iff`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIff?: (ctx: IffContext) => void;

	/**
	 * Enter a parse tree produced by the `implies`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterImplies?: (ctx: ImpliesContext) => void;
	/**
	 * Exit a parse tree produced by the `implies`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitImplies?: (ctx: ImpliesContext) => void;

	/**
	 * Enter a parse tree produced by the `andBlock`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAndBlock?: (ctx: AndBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `andBlock`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAndBlock?: (ctx: AndBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `orBlock`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOrBlock?: (ctx: OrBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `orBlock`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOrBlock?: (ctx: OrBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `literalOrId`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLiteralOrId?: (ctx: LiteralOrIdContext) => void;
	/**
	 * Exit a parse tree produced by the `literalOrId`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLiteralOrId?: (ctx: LiteralOrIdContext) => void;

	/**
	 * Enter a parse tree produced by the `tuple`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTuple?: (ctx: TupleContext) => void;
	/**
	 * Exit a parse tree produced by the `tuple`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTuple?: (ctx: TupleContext) => void;

	/**
	 * Enter a parse tree produced by the `record`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRecord?: (ctx: RecordContext) => void;
	/**
	 * Exit a parse tree produced by the `record`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRecord?: (ctx: RecordContext) => void;

	/**
	 * Enter a parse tree produced by the `recordSet`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRecordSet?: (ctx: RecordSetContext) => void;
	/**
	 * Exit a parse tree produced by the `recordSet`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRecordSet?: (ctx: RecordSetContext) => void;

	/**
	 * Enter a parse tree produced by the `sequence`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by the `sequence`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;

	/**
	 * Enter a parse tree produced by the `letIn`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLetIn?: (ctx: LetInContext) => void;
	/**
	 * Exit a parse tree produced by the `letIn`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLetIn?: (ctx: LetInContext) => void;

	/**
	 * Enter a parse tree produced by the `paren`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParen?: (ctx: ParenContext) => void;
	/**
	 * Exit a parse tree produced by the `paren`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParen?: (ctx: ParenContext) => void;

	/**
	 * Enter a parse tree produced by the `lambdaOrBraces`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLambdaOrBraces?: (ctx: LambdaOrBracesContext) => void;
	/**
	 * Exit a parse tree produced by the `lambdaOrBraces`
	 * labeled alternative in `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLambdaOrBraces?: (ctx: LambdaOrBracesContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.valDef`.
	 * @param ctx the parse tree
	 */
	enterValDef?: (ctx: ValDefContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.valDef`.
	 * @param ctx the parse tree
	 */
	exitValDef?: (ctx: ValDefContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.operDef`.
	 * @param ctx the parse tree
	 */
	enterOperDef?: (ctx: OperDefContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.operDef`.
	 * @param ctx the parse tree
	 */
	exitOperDef?: (ctx: OperDefContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.instanceDef`.
	 * @param ctx the parse tree
	 */
	enterInstanceDef?: (ctx: InstanceDefContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.instanceDef`.
	 * @param ctx the parse tree
	 */
	exitInstanceDef?: (ctx: InstanceDefContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.params`.
	 * @param ctx the parse tree
	 */
	enterParams?: (ctx: ParamsContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.params`.
	 * @param ctx the parse tree
	 */
	exitParams?: (ctx: ParamsContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.typeUnionRecOne`.
	 * @param ctx the parse tree
	 */
	enterTypeUnionRecOne?: (ctx: TypeUnionRecOneContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.typeUnionRecOne`.
	 * @param ctx the parse tree
	 */
	exitTypeUnionRecOne?: (ctx: TypeUnionRecOneContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.identOrHole`.
	 * @param ctx the parse tree
	 */
	enterIdentOrHole?: (ctx: IdentOrHoleContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.identOrHole`.
	 * @param ctx the parse tree
	 */
	exitIdentOrHole?: (ctx: IdentOrHoleContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.arg_list`.
	 * @param ctx the parse tree
	 */
	enterArg_list?: (ctx: Arg_listContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.arg_list`.
	 * @param ctx the parse tree
	 */
	exitArg_list?: (ctx: Arg_listContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.name_after_dot`.
	 * @param ctx the parse tree
	 */
	enterName_after_dot?: (ctx: Name_after_dotContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.name_after_dot`.
	 * @param ctx the parse tree
	 */
	exitName_after_dot?: (ctx: Name_after_dotContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `TntParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TntParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
}
