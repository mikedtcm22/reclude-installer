import { TutorialHostPlatform } from '@/services/tutorial/tutorialDialogProtocol';
import { CachedUpdateCheck, InstalledVersionInfo, UpdateCheckResult } from '@/types/update';
export declare const loadCachedUpdateCheck: () => CachedUpdateCheck | null;
export declare const saveCachedUpdateCheck: (result: UpdateCheckResult) => void;
export declare const isCachedUpdateCheckFresh: (cached: CachedUpdateCheck | null) => boolean;
export declare const checkForUpdates: (installed: InstalledVersionInfo, platform: TutorialHostPlatform, force?: boolean) => Promise<UpdateCheckResult>;
