import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
export interface NumberFieldProps extends Omit<MuiTextFieldProps, 'type'> {
    label: string;
    value?: number | string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
    step?: number;
    helperText?: string;
    error?: boolean;
    loading?: boolean;
    disabled?: boolean;
    placeholder?: string;
}
export declare function NumberField({ label, min, max, step, loading, ...props }: NumberFieldProps): import("react/jsx-runtime").JSX.Element;
