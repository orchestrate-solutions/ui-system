import React from 'react';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material';
export interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'children'> {
    label: string;
    options: Array<{
        value: any;
        label: string;
    }>;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
    helperText?: string;
    error?: boolean;
    required?: boolean;
    disabled?: boolean;
    loading?: boolean;
    row?: boolean;
}
export declare function RadioGroup({ label, options, helperText, error, required, disabled, loading, row, ...props }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
