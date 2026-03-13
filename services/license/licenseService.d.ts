import { LicenseValidationResult } from '@/types/anonymization';
export declare const activateLicense: (email: string, activationCode: string) => Promise<LicenseValidationResult>;
export declare const validateCachedLicense: () => Promise<LicenseValidationResult>;
export declare const clearLicense: () => void;
