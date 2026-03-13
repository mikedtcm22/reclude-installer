/**
 * Workbook-level settings persistence for Phase 2 tagging/config recall.
 */
import { MatchingMode, PersistedWorkbookSettings, ProtectedSheetBehavior, TaggedRange } from '@/types/anonymization';
export declare const buildWorkbookSettingsPayload: (workbookGuid: string, rememberSettings: boolean, taggedRanges: TaggedRange[], matchingMode: MatchingMode, protectedSheetBehavior: ProtectedSheetBehavior, edgeCaseScanConfig: PersistedWorkbookSettings["edgeCaseScanConfig"]) => PersistedWorkbookSettings;
export declare const loadWorkbookSettings: (workbookGuid: string) => Promise<PersistedWorkbookSettings | null>;
export declare const saveWorkbookSettings: (settings: PersistedWorkbookSettings) => Promise<void>;
export declare const clearWorkbookSettings: () => Promise<void>;
