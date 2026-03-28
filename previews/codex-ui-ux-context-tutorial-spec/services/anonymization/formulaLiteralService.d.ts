import { MatchingMode, NameMapping } from '@/types/anonymization';
export interface FormulaLiteralReplacementResult {
    output: string;
    replacements: number;
    matchedMappings: NameMapping[];
}
export declare const replaceFormulaLiteralsByMappings: (formula: string, mappings: NameMapping[], mode: MatchingMode) => FormulaLiteralReplacementResult;
