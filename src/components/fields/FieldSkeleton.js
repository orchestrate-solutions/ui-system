import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Skeleton } from '@mui/material';
export function FieldSkeleton({ height = 56, width = '100%', showLabel = false, showHelperText = false, labelWidth = '40%', helperTextWidth = '60%', }) {
    return (_jsxs(Box, { sx: { width }, children: [showLabel && (_jsx(Skeleton, { "data-testid": "skeleton", variant: "text", width: labelWidth, height: 20, sx: { mb: 1 } })), _jsx(Skeleton, { "data-testid": "skeleton", variant: "rectangular", width: "100%", height: height, sx: { borderRadius: 1 } }), showHelperText && (_jsx(Skeleton, { "data-testid": "skeleton", variant: "text", width: helperTextWidth, height: 16, sx: { mt: 0.5 } }))] }));
}
