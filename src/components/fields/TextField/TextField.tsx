import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

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

export function TextField({
  label,
  loading = false,
  ...props
}: TextFieldProps) {
  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={56} width="100%" showLabel />;
  }

  return (
    <MuiTextField
      label={label}
      variant="outlined"
      size="medium"
      fullWidth
      {...props}
    />
  );
}