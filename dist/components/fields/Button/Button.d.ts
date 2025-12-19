import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size' | 'color'> {
    children: React.ReactNode;
    variant?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    loading?: boolean;
    loadingText?: string;
    fullWidth?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare function Button({ children, loading, loadingText, variant, size, color, fullWidth, disabled, startIcon, endIcon, onClick, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
