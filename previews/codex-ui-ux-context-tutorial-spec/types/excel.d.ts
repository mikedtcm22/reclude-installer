/**
 * Excel-specific type definitions for Reclude
 *
 * This file contains types related to Excel workbook operations,
 * data manipulation, and Office.js Excel API interactions.
 */
export interface WorkbookInfo {
    id: string;
    name: string;
    worksheets: WorksheetInfo[];
    hasProtectedSheets: boolean;
    lastModified: Date;
}
export interface WorksheetInfo {
    id: string;
    name: string;
    index: number;
    isProtected: boolean;
    hasData: boolean;
    cellCount: number;
}
export interface RangeInfo {
    address: string;
    worksheet: string;
    rowCount: number;
    columnCount: number;
    hasFormulas: boolean;
    hasNumbers: boolean;
    hasText: boolean;
}
export interface CellInfo {
    address: string;
    value: unknown;
    formula?: string;
    numberFormat?: string;
    dataType: 'text' | 'number' | 'boolean' | 'date' | 'formula' | 'empty';
}
export interface ExcelOperationResult<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    warning?: string;
}
