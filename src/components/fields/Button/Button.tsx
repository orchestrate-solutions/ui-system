import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, CircularProgress } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size' | 'color'> {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({
  children,
  loading = false,
  loadingText,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  ...props
}: ButtonProps) {
  // Show skeleton while loading (for initial load states)
  if (loading && !loadingText) {
    return <FieldSkeleton height={size === 'small' ? 32 : size === 'large' ? 48 : 40} width={fullWidth ? '100%' : 120} />;
  }

  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      startIcon={loading && loadingText ? <CircularProgress size={16} color="inherit" /> : startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...props}
    >
      {loading && loadingText ? loadingText : children}
    </MuiButton>
  );
}