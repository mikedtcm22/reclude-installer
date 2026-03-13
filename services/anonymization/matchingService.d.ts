/**
 * Text normalization and matching helpers for anonymization and restore.
 */
import { MatchingMode } from '@/types/anonymization';
export declare const normalizeText: (value: string) => string;
interface ReplaceByModeArgs {
    input: string;
    normalizedNeedle: string;
    replacement: string;
    mode: MatchingMode;
}
interface ReplaceByModeResult {
    output: string;
    replacements: number;
}
export declare const replaceTextByMode: ({ input, normalizedNeedle, replacement, mode, }: ReplaceByModeArgs) => ReplaceByModeResult;
export {};
