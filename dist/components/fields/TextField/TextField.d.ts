import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant' | 'size'> {
    label: string;
    helperText?: string;
    error?: boolean;
    variant?: 'outlined' | 'filled' | 'standard';
    size?: 'small' | 'medium';
    multiline?: boolean;
    rows?: number;
    fullWidth?: boolean;
    required?: boolean;
    disabled?: boolean;
    loading?: boolean;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
export declare function TextField({ label, loading, ...props }: TextFieldProps): import("react/jsx-runtime").JSX.Element;
