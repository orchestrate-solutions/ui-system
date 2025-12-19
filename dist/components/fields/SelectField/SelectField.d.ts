import React from 'react';
import { SelectProps, SelectChangeEvent } from '@mui/material';
export interface SelectFieldProps extends Omit<SelectProps<any>, 'children'> {
    label: string;
    options: Array<{
        value: any;
        label: string;
    }>;
    helperText?: string;
    error?: boolean;
    required?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
    size?: 'small' | 'medium';
    value?: any;
    onChange?: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
}
export declare function SelectField({ label, options, helperText, error, required, disabled, fullWidth, loading, size, value, onChange, ...props }: SelectFieldProps): import("react/jsx-runtime").JSX.Element;
