import { FormControl, FormLabel, FormHelperText, Button, Box, useTheme } from '@mui/material';
import { Brightness4 as DarkIcon, Brightness7 as LightIcon } from '@mui/icons-material';
import { FieldSkeleton } from '../FieldSkeleton';

export type ThemeMode = 'light' | 'dark';

export interface ThemeToggleProps {
  label?: string;
  value?: ThemeMode;
  onChange?: (theme: ThemeMode) => void;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  showIcons?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export function ThemeToggle({
  label = 'Theme',
  value = 'dark',
  onChange,
  helperText,
  error,
  required,
  disabled,
  loading = false,
  showIcons = true,
  size = 'medium',
  ...props
}: ThemeToggleProps) {
  const theme = useTheme();

  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={40} width="100%" showLabel={!!label} />;
  }

  const handleToggle = () => {
    if (disabled || !onChange) return;
    const newTheme = value === 'dark' ? 'light' : 'dark';
    onChange(newTheme);
  };

  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return { height: 32, fontSize: '0.75rem' };
      case 'large':
        return { height: 48, fontSize: '1rem' };
      default:
        return { height: 40, fontSize: '0.875rem' };
    }
  };

  const buttonSize = getButtonSize();

  return (
    <FormControl error={error} disabled={disabled} {...props}>
      {label && (
        <FormLabel
          required={required}
          sx={{
            marginBottom: 1,
            color: 'text.primary',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          {label}
        </FormLabel>
      )}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
          onClick={handleToggle}
          disabled={disabled}
          variant="outlined"
          size={size}
          sx={{
            minWidth: 120,
            justifyContent: 'flex-start',
            textTransform: 'none',
            borderColor: error ? 'error.main' : 'divider',
            color: 'text.primary',
            '&:hover': {
              borderColor: error ? 'error.main' : 'primary.main',
              backgroundColor: theme.palette.action.hover,
            },
            '&.Mui-disabled': {
              borderColor: 'action.disabled',
              color: 'action.disabled',
            },
            height: buttonSize.height,
            fontSize: buttonSize.fontSize,
          }}
          startIcon={
            showIcons ? (
              value === 'dark' ? (
                <LightIcon sx={{ fontSize: size === 'small' ? 16 : size === 'large' ? 24 : 20 }} />
              ) : (
                <DarkIcon sx={{ fontSize: size === 'small' ? 16 : size === 'large' ? 24 : 20 }} />
              )
            ) : undefined
          }
        >
          Switch to {value === 'dark' ? 'Light' : 'Dark'} Mode
        </Button>
      </Box>
      {helperText && (
        <FormHelperText error={error} sx={{ marginTop: 0.5 }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}