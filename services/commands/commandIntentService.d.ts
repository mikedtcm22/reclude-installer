export type CommandIntent = {
    type: 'tag-range';
    source: 'context-menu' | 'shortcut';
};
type CommandIntentListener = (intent: CommandIntent) => void;
export declare const queueCommandIntent: (intent: CommandIntent) => void;
export declare const consumeQueuedCommandIntent: () => CommandIntent | null;
export declare const subscribeToCommandIntents: (listener: CommandIntentListener) => (() => void);
export {};
