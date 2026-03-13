/**
 * Restore key import/export helpers.
 */
import { RestoreKeyData } from '@/types/anonymization';
export declare const buildRestoreKeyFilename: (keyData: RestoreKeyData) => string;
export declare const downloadRestoreKey: (keyData: RestoreKeyData) => string;
export declare const parseRestoreKeyFile: (file: File) => Promise<RestoreKeyData>;
