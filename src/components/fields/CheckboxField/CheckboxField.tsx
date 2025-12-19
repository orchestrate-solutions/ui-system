import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

export interface CheckboxFieldProps {
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export function CheckboxField({
  label,
  checked,
  onChange,
  helperText,
  error,
  required,
  disabled,
  loading = false,
  ...props
}: CheckboxFieldProps) {
  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={24} width="100%" showLabel={false} />;
  }

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            required={required}
            disabled={disabled}
            color={error ? 'error' : 'primary'}
          />
        }
        label={label}
        disabled={disabled}
        {...props}
      />
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </>
  );
}