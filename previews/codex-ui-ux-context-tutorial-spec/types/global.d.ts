/**
 * Global type definitions for Reclude Office Add-in
 *
 * This file contains shared types used throughout the application,
 * including Office.js extensions and application-specific interfaces.
 */
import { ReactNode } from 'react';
export interface AppError {
    message: string;
    code?: string;
    stack?: string;
    timestamp: Date;
}
export interface LoadingState {
    isLoading: boolean;
    message?: string;
    progress?: number;
}
export interface ApiResponse<T = unknown> {
    data: T;
    success: boolean;
    error?: AppError;
}
export interface ModalState {
    isOpen: boolean;
    title?: string;
    content?: string;
    size?: 'small' | 'medium' | 'large';
}
export interface ToastMessage {
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    timestamp: Date;
}
export interface OfficeContext {
    platform: string;
    host: string;
    version: string;
    isInitialized: boolean;
}
export interface ExcelContext {
    workbook: unknown | null;
    worksheet: unknown | null;
    selectedRange: unknown | null;
    isConnected: boolean;
}
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type AsyncResult<T> = Promise<T>;
export interface BaseComponentProps {
    className?: string;
    'data-testid'?: string;
}
export interface LayoutComponentProps extends BaseComponentProps {
    children: ReactNode;
}
