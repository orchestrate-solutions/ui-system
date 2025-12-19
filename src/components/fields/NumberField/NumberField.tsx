import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

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

export function NumberField({
  label,
  min,
  max,
  step = 1,
  loading = false,
  ...props
}: NumberFieldProps) {
  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={56} width="100%" showLabel />;
  }

  return (
    <MuiTextField
      label={label}
      type="number"
      variant="outlined"
      fullWidth
      inputProps={{
        ...(min !== undefined && { min }),
        ...(max !== undefined && { max }),
        ...(step !== undefined && { step }),
      }}
      {...props}
    />
  );
}