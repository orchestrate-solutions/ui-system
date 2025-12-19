import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

export interface TextareaFieldProps extends Omit<MuiTextFieldProps, 'multiline'> {
  label: string;
  rows?: number;
  maxRows?: number;
  helperText?: string;
  error?: boolean;
  loading?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
}

export function TextareaField({
  label,
  rows = 4,
  loading = false,
  ...props
}: TextareaFieldProps) {
  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={rows * 24 + 16} width="100%" showLabel />;
  }

  return (
    <MuiTextField
      label={label}
      multiline
      rows={rows}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
}