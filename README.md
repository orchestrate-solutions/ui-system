# @hybrid/ui-system - Batteries-Included UI System

**@hybrid/ui-system** provides a complete UI system with consistent dark theme and 11 micro components. One install gives you everything - theme + components for guaranteed visual and behavioral consistency.

## Quick Start

### Install
```bash
npm install github:orchestrate-solutions/ui-system
```

### Basic Usage
```tsx
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme, hybridTheme } from '@hybrid/ui-system';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Advanced Usage

### Custom Themes
Create your own themes with custom colors:

```tsx
import { createHybridTheme } from '@hybrid/ui-system';

const customTheme = createHybridTheme({
  mode: 'dark',
  primaryColor: '#ff6b35',
  secondaryColor: '#f7931e',
  backgroundColor: '#1a1a2e',
  paperColor: '#16213e',
});
```

## Micro Components

Use our 11 reusable micro components that automatically inherit the theme:

```tsx
import { TextField, SelectField, CheckboxField, ThemeToggle } from '@hybrid/ui-system';

export function MyForm() {
  return (
    <>
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
    </>
  );
}
```

## Advanced Usage

### Custom Themes
Create your own themes with custom colors:

```tsx
import { createHybridTheme } from '@hybrid/ui-system';

const customTheme = createHybridTheme({
  mode: 'dark',
  primaryColor: '#ff6b35',
  secondaryColor: '#f7931e',
  backgroundColor: '#1a1a2e',
  paperColor: '#16213e',
});
```

### Available Components

- **Button** - Enhanced button with loading states
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

✅ **Consistent Design** - Same colors, fonts, spacing across all apps  
✅ **Consistent Behavior** - Same validation, error states, accessibility  
✅ **Easy Integration** - Drop-in replacement for standard MUI components  
✅ **Future-Proof** - Updates automatically benefit all applications  
✅ **Well Tested** - 120 Cypress tests ensure reliability  
✅ **Interactive Docs** - Storybook stories with live component playground  
✅ **Theme Customization** - Build your own theme, system ensures consistency  

## Storybook

Run interactive component documentation:

```bash
npm run storybook
```

All 11 components include stories showcasing different props, states, and edge cases.