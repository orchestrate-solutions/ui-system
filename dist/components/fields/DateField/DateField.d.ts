import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
export interface DateFieldProps extends Omit<MuiTextFieldProps, 'type'> {
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    error?: boolean;
    loading?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    fullWidth?: boolean;
}
export declare function DateField({ label, loading, ...props }: DateFieldProps): import("react/jsx-runtime").JSX.Element;
