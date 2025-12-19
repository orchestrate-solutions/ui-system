import { jsx as _jsx } from "react/jsx-runtime";
import { TextField as MuiTextField } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';
export function DateField({ label, loading = false, ...props }) {
    // Show skeleton while loading
    if (loading) {
        return _jsx(FieldSkeleton, { height: 56, width: "100%", showLabel: true });
    }
    return (_jsx(MuiTextField, { label: label, type: "date", variant: "outlined", fullWidth: true, InputLabelProps: {
            shrink: true,
        }, ...props }));
}
