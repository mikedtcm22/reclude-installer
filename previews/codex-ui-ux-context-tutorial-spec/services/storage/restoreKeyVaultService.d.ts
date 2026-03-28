/**
 * Local machine restore-key vault for the active workbook.
 *
 * Office add-ins cannot reliably write directly to arbitrary filesystem paths,
 * so the default restore flow stores one merged key per workbook in local storage.
 */
import { RestoreKeyData } from '@/types/anonymization';
export declare const mergeRestoreKeys: (existingKeyData: RestoreKeyData | null, incomingKeyData: RestoreKeyData) => RestoreKeyData;
export declare const loadLocalRestoreKey: (workbookGuid: string) => RestoreKeyData | null;
export declare const saveLocalRestoreKey: (keyData: RestoreKeyData) => RestoreKeyData;
export declare const replaceLocalRestoreKey: (keyData: RestoreKeyData) => void;
export declare const clearLocalRestoreKey: (workbookGuid: string) => void;
