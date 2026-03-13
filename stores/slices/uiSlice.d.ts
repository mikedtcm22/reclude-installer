/**
 * UI State Slice
 *
 * This slice manages the user interface state including modal visibility,
 * loading states, and error handling.
 */
import { PayloadAction } from '@reduxjs/toolkit';
import { ModalState, LoadingState, ToastMessage } from '@/types/global';
export interface UIState {
    isTaskPaneVisible: boolean;
    modal: ModalState;
    loading: LoadingState;
    toasts: ToastMessage[];
    currentView: string;
    isOfficeInitialized: boolean;
}
export declare const uiSlice: import("@reduxjs/toolkit").Slice<UIState, {
    setTaskPaneVisible: (state: import("immer").WritableDraft<UIState>, action: PayloadAction<boolean>) => void;
    setModal: (state: import("immer").WritableDraft<UIState>, action: PayloadAction<Partial<ModalState>>) => void;
    closeModal: (state: import("immer").WritableDraft<UIState>) => void;
    setLoading: (state: import("immer").WritableDraft<UIState>, action: PayloadAction<Partial<LoadingState>>) => void;
    addToast: (state: import("immer").WritableDraft<UIState>, action: PayloadAction<Omit<ToastMessage, "id" | "timestamp">>) => void;
    removeToast: (state: import("immer").WritableDraft<UIState>, action: PayloadAction<string>) => void;
    setCurrentView: (state: import("immer").WritableDraft<UIState>, action: PayloadAction<string>) => void;
    setOfficeInitialized: (state: import("immer").WritableDraft<UIState>, action: PayloadAction<boolean>) => void;
}, "ui", "ui", import("@reduxjs/toolkit").SliceSelectors<UIState>>;
export declare const setTaskPaneVisible: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "ui/setTaskPaneVisible">, setModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<Partial<ModalState>, "ui/setModal">, closeModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"ui/closeModal">, setLoading: import("@reduxjs/toolkit").ActionCreatorWithPayload<Partial<LoadingState>, "ui/setLoading">, addToast: import("@reduxjs/toolkit").ActionCreatorWithPayload<Omit<ToastMessage, "id" | "timestamp">, "ui/addToast">, removeToast: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "ui/removeToast">, setCurrentView: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "ui/setCurrentView">, setOfficeInitialized: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "ui/setOfficeInitialized">;
declare const _default: import("redux").Reducer<UIState>;
export default _default;
