export type ReleaseChannel = 'stable' | 'preview' | 'development' | 'unknown';
export interface PlatformDownloadInfo {
    url: string;
    sha256?: string;
}
export interface UpdateFeedData {
    channel: Exclude<ReleaseChannel, 'development' | 'unknown'>;
    publishedAt: string;
    releaseNotesUrl?: string;
    latestWebVersion: string;
    latestManifestVersion: string;
    latestInstallerVersion: string;
    minimumSupportedManifestVersion: string;
    minimumSupportedInstallerVersion: string;
    recommendedUpdate: boolean;
    requiredUpdate: boolean;
    downloads: {
        mac?: PlatformDownloadInfo;
        windows?: PlatformDownloadInfo;
    };
    message?: string;
    minimumAppBehaviorVersion?: string;
}
export interface InstalledVersionInfo {
    appVersion: string;
    manifestVersion: string;
    installerVersion: string;
    channel: ReleaseChannel;
    isDevelopmentBuild: boolean;
    feedUrl: string | null;
    licenseApiBaseUrl: string;
    supportEmail: string;
}
export type UpdateAvailability = 'disabled' | 'idle' | 'checking' | 'up-to-date' | 'recommended' | 'required' | 'error';
export interface CachedUpdateCheck {
    checkedAt: string;
    result: UpdateCheckResult;
}
export interface UpdateCheckResult {
    availability: UpdateAvailability;
    checkedAt: string;
    installed: InstalledVersionInfo;
    feed: UpdateFeedData | null;
    downloadUrl: string | null;
    message: string;
    error?: string;
}
