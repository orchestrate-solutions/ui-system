import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormLabel, FormHelperText, Button, Box, useTheme } from '@mui/material';
import { Brightness4 as DarkIcon, Brightness7 as LightIcon } from '@mui/icons-material';
import { FieldSkeleton } from '../FieldSkeleton';
export function ThemeToggle({ label = 'Theme', value = 'dark', onChange, helperText, error, required, disabled, loading = false, showIcons = true, size = 'medium', ...props }) {
    const theme = useTheme();
    // Show skeleton while loading
    if (loading) {
        return _jsx(FieldSkeleton, { height: 40, width: "100%", showLabel: !!label });
    }
    const handleToggle = () => {
        if (disabled || !onChange)
            return;
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
    return (_jsxs(FormControl, { error: error, disabled: disabled, ...props, children: [label && (_jsx(FormLabel, { required: required, sx: {
                    marginBottom: 1,
                    color: 'text.primary',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                }, children: label })), _jsx(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: _jsxs(Button, { onClick: handleToggle, disabled: disabled, variant: "outlined", size: size, sx: {
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
                    }, startIcon: showIcons ? (value === 'dark' ? (_jsx(LightIcon, { sx: { fontSize: size === 'small' ? 16 : size === 'large' ? 24 : 20 } })) : (_jsx(DarkIcon, { sx: { fontSize: size === 'small' ? 16 : size === 'large' ? 24 : 20 } }))) : undefined, children: ["Switch to ", value === 'dark' ? 'Light' : 'Dark', " Mode"] }) }), helperText && (_jsx(FormHelperText, { error: error, sx: { marginTop: 0.5 }, children: helperText }))] }));
}
