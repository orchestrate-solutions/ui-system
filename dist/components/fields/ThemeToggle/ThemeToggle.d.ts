export type ThemeMode = 'light' | 'dark';
export interface ThemeToggleProps {
    label?: string;
    value?: ThemeMode;
    onChange?: (theme: ThemeMode) => void;
    helperText?: string;
    error?: boolean;
    required?: boolean;
    disabled?: boolean;
    loading?: boolean;
    showIcons?: boolean;
    size?: 'small' | 'medium' | 'large';
}
export declare function ThemeToggle({ label, value, onChange, helperText, error, required, disabled, loading, showIcons, size, ...props }: ThemeToggleProps): import("react/jsx-runtime").JSX.Element;
