import { EdgeCaseScanConfig, EdgeCaseMatchType, NameMapping } from '@/types/anonymization';
export declare const edgeCaseMatchTypes: EdgeCaseMatchType[];
export declare const defaultEdgeCaseScanConfig: () => EdgeCaseScanConfig;
export declare const sanitizeEdgeCaseScanConfig: (value: unknown, fallback?: EdgeCaseScanConfig) => EdgeCaseScanConfig;
export declare const isLikelyBlockText: (value: string, minLength: number) => boolean;
export declare const buildEdgeCaseGroupKey: (matchType: EdgeCaseMatchType, mapping: NameMapping) => string;
