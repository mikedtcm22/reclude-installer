import { TaggedRange } from '@/types/anonymization';
export interface SelectionOverlapAnalysis {
    selectionAddress: string;
    exactMatch: TaggedRange | null;
    overlappingTaggedRanges: TaggedRange[];
}
export declare const getSelectedRangeAddress: () => Promise<string>;
export declare const analyzeSelectionAgainstTaggedRanges: (taggedRanges: TaggedRange[]) => Promise<SelectionOverlapAnalysis>;
export declare const deriveEffectiveTaggedRangeAddress: (selectionAddress: string, hasHeaders: boolean) => Promise<string>;
