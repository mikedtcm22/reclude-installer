/**
 * Redux Toolkit Store Configuration
 *
 * This file configures the Redux store for the Reclude application
 * with proper middleware and development tools integration.
 */
/**
 * Configure the Redux store with all slices and middleware
 */
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    ui: import("./slices/uiSlice").UIState;
    excel: import("./slices/excelSlice").ExcelState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        ui: import("./slices/uiSlice").UIState;
        excel: import("./slices/excelSlice").ExcelState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
