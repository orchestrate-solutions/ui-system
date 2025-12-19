import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
export interface FileFieldProps extends Omit<MuiTextFieldProps, 'type' | 'onChange'> {
    label: string;
    accept?: string;
    loading?: boolean;
    error?: boolean;
    helperText?: string;
    onChange?: (file: File | null) => void;
    disabled?: boolean;
}
export declare function FileField({ label, accept, loading, onChange, ...props }: FileFieldProps): import("react/jsx-runtime").JSX.Element;
