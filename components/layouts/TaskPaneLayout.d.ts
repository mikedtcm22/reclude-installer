/**
 * Reclude task pane shell layout.
 */
import React from 'react';
import { LayoutComponentProps } from '@/types/global';
interface TaskPaneLayoutProps extends LayoutComponentProps {
    title?: string;
    showFooter?: boolean;
}
declare const TaskPaneLayout: React.FC<TaskPaneLayoutProps>;
export default TaskPaneLayout;
