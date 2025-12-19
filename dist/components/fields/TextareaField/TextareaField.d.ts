import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
export interface TextareaFieldProps extends Omit<MuiTextFieldProps, 'multiline'> {
    label: string;
    rows?: number;
    maxRows?: number;
    helperText?: string;
    error?: boolean;
    loading?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    fullWidth?: boolean;
    required?: boolean;
    disabled?: boolean;
}
export declare function TextareaField({ label, rows, loading, ...props }: TextareaFieldProps): import("react/jsx-runtime").JSX.Element;
