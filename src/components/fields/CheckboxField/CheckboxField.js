import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox, FormControlLabel, FormHelperText, } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';
export function CheckboxField({ label, checked, onChange, helperText, error, required, disabled, loading = false, ...props }) {
    // Show skeleton while loading
    if (loading) {
        return _jsx(FieldSkeleton, { height: 24, width: "100%", showLabel: false });
    }
    return (_jsxs(_Fragment, { children: [_jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: checked, onChange: onChange, required: required, disabled: disabled, color: error ? 'error' : 'primary' }), label: label, disabled: disabled, ...props }), helperText && (_jsx(FormHelperText, { error: error, children: helperText }))] }));
}
