/**
 * Excel workbook anonymize/restore orchestration for text-focused Phase 2.
 */
import { AnonymizeResult, EdgeCaseCandidate, EdgeCaseDecision, OperationProgress, ProtectedSheetBehavior, RestoreKeyData, RestoreResult, TextAnonymizationConfig } from '@/types/anonymization';
export declare const repairManualCalculationModeIfNeeded: () => Promise<boolean>;
export type EdgeCaseDecisionHandler = (candidate: EdgeCaseCandidate) => Promise<EdgeCaseDecision>;
export declare const getSelectedRangeAddress: () => Promise<string>;
export declare const anonymizeWorkbook: (config: TextAnonymizationConfig, onProgress?: (progress: OperationProgress) => void, onEdgeCaseDecision?: EdgeCaseDecisionHandler, existingKeyData?: RestoreKeyData | null) => Promise<AnonymizeResult>;
export declare const restoreWorkbook: (keyData: RestoreKeyData, protectedSheetBehavior: ProtectedSheetBehavior, onProgress?: (progress: OperationProgress) => void) => Promise<RestoreResult>;
