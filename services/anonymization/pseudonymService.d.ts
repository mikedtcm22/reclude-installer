/**
 * Deterministic pseudonym generation from tagged entity values.
 */
import { NameMapping, TaggedRange } from '@/types/anonymization';
interface TaggedValue {
    taggedRange: TaggedRange;
    value: string;
}
export declare const getDesignationLabel: (taggedRange: TaggedRange) => string;
export declare const buildNameMappings: (taggedValues: TaggedValue[], existingMappings?: NameMapping[]) => NameMapping[];
export {};
