import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { TextField as MuiTextField, Button } from '@mui/material';
import { FieldSkeleton } from '../FieldSkeleton';
export function FileField({ label, accept, loading = false, onChange, ...props }) {
    const fileInputRef = React.useRef(null);
    // Show skeleton while loading
    if (loading) {
        return _jsx(FieldSkeleton, { height: 56, width: "100%", showLabel: true });
    }
    const handleFileChange = (event) => {
        const file = event.target.files?.[0] || null;
        onChange?.(file);
    };
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };
    return (_jsxs(_Fragment, { children: [_jsx("input", { ref: fileInputRef, type: "file", accept: accept, onChange: handleFileChange, style: { display: 'none' }, "data-testid": "file-input" }), _jsx(MuiTextField, { label: label, variant: "outlined", fullWidth: true, InputProps: {
                    readOnly: true,
                    endAdornment: (_jsx(Button, { variant: "contained", onClick: handleButtonClick, size: "small", sx: { ml: 1 }, children: "Browse" })),
                }, ...props })] }));
}
