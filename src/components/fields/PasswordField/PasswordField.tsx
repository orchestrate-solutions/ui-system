import React, { useState } from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FieldSkeleton } from '../FieldSkeleton';

export interface PasswordFieldProps extends Omit<MuiTextFieldProps, 'type'> {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  error?: boolean;
  loading?: boolean;
  showPassword?: boolean;
  onShowPasswordChange?: (show: boolean) => void;
  strength?: 'weak' | 'medium' | 'strong';
  required?: boolean;
  disabled?: boolean;
}

export function PasswordField({
  label,
  loading = false,
  showPassword: externalShowPassword,
  onShowPasswordChange,
  strength,
  ...props
}: PasswordFieldProps) {
  const [internalShowPassword, setInternalShowPassword] = useState(false);

  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={56} width="100%" showLabel />;
  }

  const showPassword = externalShowPassword ?? internalShowPassword;
  const setShowPassword = onShowPasswordChange ?? setInternalShowPassword;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 'weak': return 'error.main';
      case 'medium': return 'warning.main';
      case 'strong': return 'success.main';
      default: return 'text.secondary';
    }
  };

  return (
    <MuiTextField
      label={label}
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: strength ? getStrengthColor() : undefined,
          },
        },
      }}
      {...props}
    />
  );
}