import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, MenuItem, FormControl, InputLabel, FormHelperText, } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';
export function SelectField({ label, options, helperText, error, required, disabled, fullWidth = true, loading = false, size = 'medium', value, onChange, ...props }) {
    // Show skeleton while loading
    if (loading) {
        return _jsx(FieldSkeleton, { height: 56, width: "100%", showLabel: true });
    }
    return (_jsxs(FormControl, { fullWidth: fullWidth, error: error, disabled: disabled, required: required, size: size, children: [_jsx(InputLabel, { children: label }), _jsx(Select, { value: value, onChange: onChange, label: label, ...props, children: options.map((option) => (_jsx(MenuItem, { value: option.value, children: option.label }, option.value))) }), helperText && _jsx(FormHelperText, { children: helperText })] }));
}
