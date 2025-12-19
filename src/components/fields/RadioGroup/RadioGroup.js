import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RadioGroup as MuiRadioGroup, FormControlLabel, Radio, FormLabel, FormControl, FormHelperText, } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';
export function RadioGroup({ label, options, helperText, error, required, disabled, loading = false, row = false, ...props }) {
    // Show skeleton while loading
    if (loading) {
        return _jsx(FieldSkeleton, { height: options.length * 32 + 24, width: "100%", showLabel: true });
    }
    return (_jsxs(FormControl, { error: error, required: required, disabled: disabled, children: [_jsx(FormLabel, { children: label }), _jsx(MuiRadioGroup, { row: row, ...props, children: options.map((option) => (_jsx(FormControlLabel, { value: option.value, control: _jsx(Radio, {}), label: option.label, disabled: disabled }, option.value))) }), helperText && _jsx(FormHelperText, { children: helperText })] }));
}
