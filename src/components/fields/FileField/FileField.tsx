import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, Button } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';

export interface FileFieldProps extends Omit<MuiTextFieldProps, 'type' | 'onChange'> {
  label: string;
  accept?: string;
  loading?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (file: File | null) => void;
  disabled?: boolean;
}

export function FileField({
  label,
  accept,
  loading = false,
  onChange,
  ...props
}: FileFieldProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Show skeleton while loading
  if (loading) {
    return <FieldSkeleton height={56} width="100%" showLabel />;
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange?.(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        data-testid="file-input"
      />
      <MuiTextField
        label={label}
        variant="outlined"
        fullWidth
        InputProps={{
          readOnly: true,
          endAdornment: (
            <Button
              variant="contained"
              onClick={handleButtonClick}
              size="small"
              sx={{ ml: 1 }}
            >
              Browse
            </Button>
          ),
        }}
        {...props}
      />
    </>
  );
}