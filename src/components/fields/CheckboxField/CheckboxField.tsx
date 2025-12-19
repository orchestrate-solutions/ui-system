import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

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

  // Convert checked prop to boolean to handle form libraries that pass strings
  // Convert checked prop to boolean to handle form libraries that pass strings\n  const isChecked = (() => {\n    if (checked === true) return true;\n    if (checked === false) return false;\n    if (typeof checked === 'string') {\n      const lower = checked.toLowerCase();\n      if (['true', 'on', 'yes', '1'].includes(lower)) return true;\n      if (['false', 'off', 'no', '0', ''].includes(lower)) return false;\n    }\n    if (typeof checked === 'number') {\n      return checked > 0;\n    }\n    return Boolean(checked);\n  })();

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
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