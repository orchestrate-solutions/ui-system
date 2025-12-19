import type { Meta, StoryObj } from '@storybook/react';
import { PasswordField } from '../src/components/fields';

const meta: Meta<typeof PasswordField> = {
  title: 'Components/PasswordField',
  component: PasswordField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A password input field with visibility toggle and strength indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the password field',
    },
    value: {
      control: 'text',
      description: 'The password value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when the field is empty',
    },
    strength: {
      control: { type: 'select', options: ['weak', 'medium', 'strong'] },
      description: 'Password strength indicator',
    },
    showPassword: {
      control: 'boolean',
      description: 'Whether to show password in plain text',
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
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Current Password',
    value: 'mypassword123',
    placeholder: 'Enter current password',
  },
};

export const WeakPassword: Story = {
  args: {
    label: 'Password',
    value: '123',
    strength: 'weak',
    helperText: 'Password is too weak',
  },
};

export const MediumPassword: Story = {
  args: {
    label: 'Password',
    value: 'password123',
    strength: 'medium',
    helperText: 'Password strength: medium',
  },
};

export const StrongPassword: Story = {
  args: {
    label: 'Password',
    value: 'MyStr0ngP@ssw0rd!',
    strength: 'strong',
    helperText: 'Password strength: strong',
  },
};

export const ShowPassword: Story = {
  args: {
    label: 'Password',
    value: 'hiddenpassword',
    showPassword: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Password',
    required: true,
    placeholder: 'Password is required',
  },
};

export const Error: Story = {
  args: {
    label: 'Invalid Password',
    error: true,
    helperText: 'Password does not meet requirements',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Password Field',
    value: 'disabledpassword',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading - Securing your password input...',
    loading: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Shows the loading skeleton state for password input components.',
      },
    },
  },
};