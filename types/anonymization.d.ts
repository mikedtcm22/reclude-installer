/**
 * Text anonymization domain types for Reclude.
 */
export type MatchingMode = 'exact' | 'starts-with' | 'includes';
export type ProtectedSheetBehavior = 'ask' | 'skip' | 'cancel';
export type TagDesignation = 'Customer' | 'Vendor' | 'Employee' | 'Custom';
export type EdgeCaseMatchType = 'block-text' | 'formula-string';
export type EdgeCaseDecision = 'yes' | 'no' | 'yes-all' | 'no-all' | 'cancel';
export type LicenseStatus = 'ACTIVE_TRIAL' | 'ACTIVE_PAID' | 'INACTIVE';
export interface TaggedRange {
    id: string;
    address: string;
    designation: TagDesignation;
    customDesignation?: string;
}
export interface EdgeCaseScanConfig {
    searchBlockText: boolean;
    searchFormulaLiterals: boolean;
    blockTextMinCharacters: number;
}
export interface TextAnonymizationConfig {
    taggedRanges: TaggedRange[];
    matchingMode: MatchingMode;
    protectedSheetBehavior: ProtectedSheetBehavior;
    edgeCaseScanConfig: EdgeCaseScanConfig;
}
export interface PersistedWorkbookSettings {
    version: string;
    workbookGuid: string;
    rememberSettings: boolean;
    taggedRanges: TaggedRange[];
    matchingMode: MatchingMode;
    protectedSheetBehavior: ProtectedSheetBehavior;
    edgeCaseScanConfig: EdgeCaseScanConfig;
    updatedAt: string;
}
export interface NameMapping {
    designation: string;
    source: string;
    sourceNormalized: string;
    pseudonym: string;
}
export interface NormalizationConfig {
    caseInsensitive: boolean;
    ignorePunctuation: boolean;
    ignoreWhitespace: boolean;
}
export interface EdgeCaseCandidate {
    id: string;
    sheetName: string;
    address: string;
    matchType: EdgeCaseMatchType;
    matchedSource: string;
    replacement: string;
    previewBefore: string;
    previewAfter: string;
    groupKey: string;
}
export interface EdgeCaseOperationStats {
    found: number;
    replaced: number;
    skipped: number;
}
export interface RestoreKeyData {
    version: string;
    workbookGuid: string;
    workbookName?: string;
    createdAt: string;
    matchingMode: MatchingMode;
    normalization: NormalizationConfig;
    taggedRanges: Array<{
        address: string;
        designation: string;
    }>;
    nameMap: NameMapping[];
    edgeCaseScanConfig?: EdgeCaseScanConfig;
}
export interface OperationProgress {
    stage: string;
    processedSheets: number;
    totalSheets: number;
    percentage: number;
    currentSheet?: string;
}
export interface AnonymizeResult {
    workbookGuid: string;
    workbookName: string;
    replacedCells: number;
    replacedMatches: number;
    skippedProtectedSheets: string[];
    warnings: string[];
    keyData: RestoreKeyData;
    edgeCaseStats: EdgeCaseOperationStats;
}
export interface RestoreResult {
    replacedCells: number;
    replacedMatches: number;
    skippedProtectedSheets: string[];
    warnings: string[];
}
export interface LicenseToken {
    tokenId: string;
    status: LicenseStatus;
    email: string;
    issuedAt: string;
    expiresAt: string;
    graceUntil: string;
    refreshToken?: string;
}
export interface LicenseValidationResult {
    status: LicenseStatus;
    isActive: boolean;
    reason: string;
    token: LicenseToken | null;
}
