import { jsx as _jsx } from "react/jsx-runtime";
import { TextField as MuiTextField } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';
export function TextareaField({ label, rows = 4, loading = false, ...props }) {
    // Show skeleton while loading
    if (loading) {
        return _jsx(FieldSkeleton, { height: rows * 24 + 16, width: "100%", showLabel: true });
    }
    return (_jsx(MuiTextField, { label: label, multiline: true, rows: rows, variant: "outlined", fullWidth: true, ...props }));
}
