import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { hybridTheme } from '../src/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={hybridTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;