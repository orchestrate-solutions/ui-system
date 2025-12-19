import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  SelectProps,
  SelectChangeEvent,
} from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

export interface SelectFieldProps extends Omit<SelectProps<any>, 'children'> {
  label: string;
  options: Array<{ value: any; label: string }>;
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

export function SelectField({
  label,
  options,
  helperText,
  error,
  required,
  disabled,
  fullWidth = true,
  loading = false,
  size = 'medium',
  value,
  onChange,
  ...props
}: SelectFieldProps) {
  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={56} width="100%" showLabel />;
  }

  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      disabled={disabled}
      required={required}
      size={size}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}