/**
 * UI-specific type definitions for Reclude
 *
 * This file contains types related to user interface components,
 * state management, and user interactions.
 */
export interface ThemeConfig {
    mode: 'light' | 'dark' | 'auto';
    primaryColor: string;
    accentColor: string;
    fontSize: 'small' | 'medium' | 'large';
}
export interface FormFieldConfig {
    name: string;
    label: string;
    type: 'text' | 'number' | 'checkbox' | 'select' | 'range';
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    helpText?: string;
    validation?: ValidationRule[];
}
export interface ValidationRule {
    type: 'required' | 'min' | 'max' | 'pattern' | 'custom';
    value?: unknown;
    message: string;
    validator?: (value: unknown) => boolean;
}
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
    group?: string;
}
export interface NavigationState {
    currentView: ViewName;
    previousView?: ViewName;
    canGoBack: boolean;
    breadcrumbs: BreadcrumbItem[];
}
export type ViewName = 'welcome' | 'anonymize' | 'restore' | 'settings' | 'help' | 'about';
export interface BreadcrumbItem {
    label: string;
    view: ViewName;
    disabled?: boolean;
}
export interface ComponentState {
    isVisible: boolean;
    isDisabled: boolean;
    isLoading: boolean;
    error?: string;
    data?: unknown;
}
export interface DialogConfig {
    title: string;
    content: string;
    type: 'info' | 'warning' | 'error' | 'confirm';
    actions: DialogAction[];
    dismissible?: boolean;
}
export interface DialogAction {
    label: string;
    action: () => void;
    style?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
}
export interface TableColumn<T = unknown> {
    key: keyof T;
    header: string;
    width?: number;
    sortable?: boolean;
    filterable?: boolean;
    render?: (value: T[keyof T], item: T) => React.ReactNode;
}
export interface TableConfig<T = unknown> {
    columns: TableColumn<T>[];
    data: T[];
    sortBy?: keyof T;
    sortOrder?: 'asc' | 'desc';
    pageSize?: number;
    currentPage?: number;
    totalItems?: number;
}
export interface UserPreferences {
    theme: ThemeConfig;
    language: string;
    autoSave: boolean;
    showTooltips: boolean;
    defaultAnonymizationConfig: Partial<import('./anonymization').TextAnonymizationConfig>;
}
