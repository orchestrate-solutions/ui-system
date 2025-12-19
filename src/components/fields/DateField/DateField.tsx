import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

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

export function DateField({
  label,
  loading = false,
  ...props
}: DateFieldProps) {
  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={56} width="100%" showLabel />;
  }

  return (
    <MuiTextField
      label={label}
      type="date"
      variant="outlined"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
}