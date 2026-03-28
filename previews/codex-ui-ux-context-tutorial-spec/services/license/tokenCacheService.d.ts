import { LicenseToken } from '@/types/anonymization';
export declare const readCachedLicenseToken: () => LicenseToken | null;
export declare const writeCachedLicenseToken: (token: LicenseToken) => void;
export declare const clearCachedLicenseToken: () => void;
export declare const readLicenseEndpoint: () => string;
export declare const writeLicenseEndpoint: (endpoint: string) => void;
