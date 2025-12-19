import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { TextField as MuiTextField, InputAdornment, IconButton, } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FieldSkeleton } from '../FieldSkeleton';
export function PasswordField({ label, loading = false, showPassword: externalShowPassword, onShowPasswordChange, strength, ...props }) {
    const [internalShowPassword, setInternalShowPassword] = useState(false);
    // Show skeleton while loading
    if (loading) {
        return _jsx(FieldSkeleton, { height: 56, width: "100%", showLabel: true });
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
    return (_jsx(MuiTextField, { label: label, type: showPassword ? 'text' : 'password', variant: "outlined", fullWidth: true, InputProps: {
            endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, edge: "end", children: showPassword ? _jsx(VisibilityOff, {}) : _jsx(Visibility, {}) }) })),
        }, sx: {
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: strength ? getStrengthColor() : undefined,
                },
            },
        }, ...props }));
}
