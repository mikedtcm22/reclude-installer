export type TutorialHostPlatform = 'windows' | 'mac' | 'unknown';
export type TutorialDialogTab = 'anonymize' | 'restore' | 'account';
export type TutorialDialogToParentMessage = {
    type: 'tutorial-ready';
} | {
    type: 'tutorial-preference';
    dontShowAgain: boolean;
} | {
    type: 'tutorial-create-sample-sheet';
} | {
    type: 'tutorial-remove-sample-sheet';
} | {
    type: 'tutorial-open-tab';
    tab: TutorialDialogTab;
} | {
    type: 'tutorial-close';
    dontShowAgain: boolean;
} | {
    type: 'tutorial-finish';
    dontShowAgain: boolean;
    removeSampleSheet: boolean;
};
export type TutorialParentToDialogMessage = {
    type: 'tutorial-init';
    hostPlatform: TutorialHostPlatform;
} | {
    type: 'tutorial-sample-sheet-created';
    sheetName: string;
    suggestedSelection: string;
} | {
    type: 'tutorial-sample-sheet-removed';
} | {
    type: 'tutorial-error';
    message: string;
};
export declare const parseTutorialDialogToParentMessage: (rawValue: string) => TutorialDialogToParentMessage | null;
export declare const parseTutorialParentToDialogMessage: (rawValue: string) => TutorialParentToDialogMessage | null;
export declare const serializeTutorialDialogToParentMessage: (message: TutorialDialogToParentMessage) => string;
export declare const serializeTutorialParentToDialogMessage: (message: TutorialParentToDialogMessage) => string;
