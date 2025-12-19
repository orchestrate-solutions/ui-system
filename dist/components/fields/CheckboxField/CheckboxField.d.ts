import React from 'react';
export interface CheckboxFieldProps {
    label: string;
    checked?: boolean | string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    helperText?: string;
    error?: boolean;
    required?: boolean;
    disabled?: boolean;
    loading?: boolean;
}
export declare function CheckboxField({ label, checked, onChange, helperText, error, required, disabled, loading, ...props }: CheckboxFieldProps): import("react/jsx-runtime").JSX.Element;
