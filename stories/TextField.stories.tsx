import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../src/components/fields';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A text input field with consistent styling and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the input field',
    },
    value: {
      control: 'text',
      description: 'The value of the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when the field is empty',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether to show error state',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the field',
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show loading skeleton',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Username',
    value: 'john_doe',
    placeholder: 'Enter username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    helperText: 'Password must be at least 8 characters',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: true,
    helperText: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read-only Field',
    value: 'This field is disabled',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading - Please wait while we load your data...',
    loading: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Shows the loading skeleton state with animated placeholders.',
      },
    },
  },
};