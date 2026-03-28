/**
 * Excel Context Slice
 *
 * This slice manages the Excel workbook context including current workbook
 * information, worksheet data, and selected ranges.
 */
import { PayloadAction } from '@reduxjs/toolkit';
import { WorkbookInfo, WorksheetInfo, RangeInfo } from '@/types/excel';
import { ExcelContext } from '@/types/global';
export interface ExcelState {
    context: ExcelContext;
    workbookInfo: WorkbookInfo | null;
    currentWorksheet: WorksheetInfo | null;
    selectedRange: RangeInfo | null;
    isConnected: boolean;
    lastError: string | null;
}
export declare const excelSlice: import("@reduxjs/toolkit").Slice<ExcelState, {
    setContext: (state: import("immer").WritableDraft<ExcelState>, action: PayloadAction<Partial<ExcelContext>>) => void;
    setWorkbookInfo: (state: import("immer").WritableDraft<ExcelState>, action: PayloadAction<WorkbookInfo | null>) => void;
    setCurrentWorksheet: (state: import("immer").WritableDraft<ExcelState>, action: PayloadAction<WorksheetInfo | null>) => void;
    setSelectedRange: (state: import("immer").WritableDraft<ExcelState>, action: PayloadAction<RangeInfo | null>) => void;
    setConnected: (state: import("immer").WritableDraft<ExcelState>, action: PayloadAction<boolean>) => void;
    setError: (state: import("immer").WritableDraft<ExcelState>, action: PayloadAction<string | null>) => void;
    clearError: (state: import("immer").WritableDraft<ExcelState>) => void;
    resetState: () => ExcelState;
}, "excel", "excel", import("@reduxjs/toolkit").SliceSelectors<ExcelState>>;
export declare const setContext: import("@reduxjs/toolkit").ActionCreatorWithPayload<Partial<ExcelContext>, "excel/setContext">, setWorkbookInfo: import("@reduxjs/toolkit").ActionCreatorWithPayload<WorkbookInfo | null, "excel/setWorkbookInfo">, setCurrentWorksheet: import("@reduxjs/toolkit").ActionCreatorWithPayload<WorksheetInfo | null, "excel/setCurrentWorksheet">, setSelectedRange: import("@reduxjs/toolkit").ActionCreatorWithPayload<RangeInfo | null, "excel/setSelectedRange">, setConnected: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "excel/setConnected">, setError: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, "excel/setError">, clearError: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"excel/clearError">, resetState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"excel/resetState">;
declare const _default: import("redux").Reducer<ExcelState>;
export default _default;
