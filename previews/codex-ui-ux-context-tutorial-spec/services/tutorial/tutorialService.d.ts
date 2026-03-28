export interface TutorialPreferences {
    hasSeenIntro: boolean;
    hideOnStartup: boolean;
    lastCompletedAt?: string;
}
export interface TutorialSheetInfo {
    sheetName: string;
    suggestedSelection: string;
}
export declare const loadTutorialPreferences: () => TutorialPreferences;
export declare const saveTutorialPreferences: (nextPreferences: TutorialPreferences) => void;
export declare const markTutorialSeen: () => TutorialPreferences;
export declare const updateTutorialHideOnStartup: (hideOnStartup: boolean) => TutorialPreferences;
export declare const markTutorialCompleted: (hideOnStartup: boolean) => TutorialPreferences;
export declare const createTutorialWorksheet: () => Promise<TutorialSheetInfo>;
export declare const removeTutorialWorksheet: (sheetName: string) => Promise<void>;
