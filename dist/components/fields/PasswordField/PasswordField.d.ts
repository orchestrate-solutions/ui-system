import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
export interface PasswordFieldProps extends Omit<MuiTextFieldProps, 'type'> {
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    error?: boolean;
    loading?: boolean;
    showPassword?: boolean;
    onShowPasswordChange?: (show: boolean) => void;
    strength?: 'weak' | 'medium' | 'strong';
    required?: boolean;
    disabled?: boolean;
}
export declare function PasswordField({ label, loading, showPassword: externalShowPassword, onShowPasswordChange, strength, ...props }: PasswordFieldProps): import("react/jsx-runtime").JSX.Element;
