import { Theme } from '@mui/material/styles';
export declare const lightTheme: Theme;
export declare const darkTheme: Theme;
export declare const hybridTheme: Theme;
export interface HybridThemeOptions {
    mode?: 'light' | 'dark';
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    paperColor?: string;
}
export declare function createHybridTheme(options?: HybridThemeOptions): Theme;
export default hybridTheme;
