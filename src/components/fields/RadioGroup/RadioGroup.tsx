import React from 'react';
import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

export interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'children'> {
  label: string;
  options: Array<{ value: any; label: string }>;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  row?: boolean;
}

export function RadioGroup({
  label,
  options,
  helperText,
  error,
  required,
  disabled,
  loading = false,
  row = false,
  ...props
}: RadioGroupProps) {
  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={options.length * 32 + 24} width="100%" showLabel />;
  }

  return (
    <FormControl error={error} required={required} disabled={disabled}>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row={row} {...props}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            disabled={disabled}
          />
        ))}
      </MuiRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}