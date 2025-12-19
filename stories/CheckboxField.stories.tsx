import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxField } from '../src/components/fields';

const meta: Meta<typeof CheckboxField> = {
  title: 'Components/CheckboxField',
  component: CheckboxField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox input field with consistent styling and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
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
    label: 'Agree to terms',
  },
};

export const Checked: Story = {
  args: {
    label: 'I accept the terms and conditions',
    checked: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required agreement',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'Receive updates about new features',
  },
};

export const Error: Story = {
  args: {
    label: 'Accept terms',
    error: true,
    helperText: 'You must accept the terms to continue',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    checked: true,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading - Processing your agreement...',
    loading: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Shows the loading skeleton state for checkbox components.',
      },
    },
  },
};