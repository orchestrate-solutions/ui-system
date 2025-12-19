# @hybrid/ui-system - Batteries-Included UI System

**@hybrid/ui-system** provides a complete UI system with consistent dark theme and 10 micro components. One install gives you everything - theme + components for guaranteed visual and behavioral consistency.

## Quick Start

### Install
```bash
npm install github:orchestrate-solutions/ui-system
```

### Basic Usage
```tsx
import { ThemeProvider } from '@mui/material/styles';
import { hybridTheme } from '@hybrid/ui-system';

export default function App() {
  return (
    <ThemeProvider theme={hybridTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## With Micro Components

For consistent forms across all applications, use our 9 reusable micro components that automatically inherit the theme when your app is wrapped with `ThemeProvider`.

### Usage
```tsx
import { TextField, SelectField, CheckboxField, ThemeToggle, hybridTheme } from '@hybrid/ui-system';

export function MyForm() {
  return (
    <TextField label="Name" required />
    <SelectField 
      label="Type" 
      options={[
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' }
      ]} 
    />
    <CheckboxField label="Agree to terms" />
    <ThemeToggle label="Theme" />
  );
}
```

## Available Micro Components

- **TextField** - Text input with validation
- **SelectField** - Dropdown selection
- **DateField** - Date picker
- **CheckboxField** - Checkbox input
- **TextareaField** - Multi-line text
- **FileField** - File upload
- **PasswordField** - Password input
- **NumberField** - Numeric input
- **RadioGroup** - Radio buttons
- **ThemeToggle** - Interactive theme switcher (light/dark mode)

## Benefits

✅ **Consistent Appearance** - Same colors, fonts, spacing across all apps  
✅ **Consistent Behavior** - Same validation, error states, accessibility  
✅ **Easy Integration** - Drop-in replacement for standard MUI components  
✅ **Future-Proof** - Updates automatically benefit all applications  
✅ **Well Tested** - Comprehensive testing ensures reliability  
✅ **Regression Testing** - Storybook stories catch visual changes immediately  
✅ **Interactive Documentation** - Live component playground for all variants  
✅ **Theme Customization** - Build your own theme, system ensures consistency  
✅ **Cypress Testing** - Comprehensive component testing ensures reliability  

## Storybook Testing

Comprehensive Storybook stories have been created for all 10 micro components, providing interactive documentation and visual regression testing.

### Available Stories
- **TextField** - Text input with validation states
- **SelectField** - Dropdown selection with options
- **DateField** - Date picker input
- **CheckboxField** - Checkbox with agreement states
- **TextareaField** - Multi-line text input
- **FileField** - File upload with validation
- **PasswordField** - Password input with strength indicators
- **NumberField** - Numeric input with min/max/step
- **RadioGroup** - Radio button groups
- **ThemeToggle** - Interactive theme switching with live preview

### Running Storybook
```bash
npm run storybook
```

Each story includes multiple variants showcasing different props, states, and edge cases for comprehensive testing. Loading states are prominently displayed with descriptive labels to demonstrate skeleton behavior.