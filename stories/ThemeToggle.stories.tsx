import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { hybridTheme, lightTheme, darkTheme } from '../src/theme';
import { ThemeToggle } from '../src/components/fields';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A theme toggle component that allows users to switch between light and dark themes. Shows what clicking will do with appropriate icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Current theme mode',
    },
    onChange: {
      action: 'themeChanged',
      description: 'Called when theme is toggled',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the toggle button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show loading skeleton',
    },
    label: {
      control: 'text',
      description: 'Label for the form control',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the component',
    },
    error: {
      control: 'boolean',
      description: 'Whether to show error state',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    showIcons: {
      control: 'boolean',
      description: 'Whether to show theme icons',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={hybridTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Theme',
    value: "light"
  },
  render: (args) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    return (
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <div style={{ padding: '20px', backgroundColor: theme === 'dark' ? '#0d1117' : '#ffffff' }}>
          <ThemeToggle
            {...args}
            value={theme}
            onChange={setTheme}
          />
          <p style={{ marginTop: '16px', color: theme === 'dark' ? '#e6edf3' : '#1a1a1a' }}>
            Current theme: {theme}
          </p>
        </div>
      </ThemeProvider>
    );
  },
};