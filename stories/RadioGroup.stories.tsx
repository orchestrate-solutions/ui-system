import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../src/components/fields';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A radio button group with consistent styling and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the radio group',
    },
    value: {
      control: 'text',
      description: 'The selected value',
    },
    options: {
      control: 'object',
      description: 'Array of options with value and label',
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
    row: {
      control: 'boolean',
      description: 'Whether to display options in a row',
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show loading skeleton',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const longOptions = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'extra-large', label: 'Extra Large' },
  { value: 'xxl', label: 'XXL' },
];

export const Default: Story = {
  args: {
    label: 'Select Option',
    options: sampleOptions,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Selected Option',
    value: 'option2',
    options: sampleOptions,
  },
};

export const RowLayout: Story = {
  args: {
    label: 'Size Selection',
    options: longOptions,
    row: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Selection',
    options: sampleOptions,
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Payment Method',
    options: [
      { value: 'credit', label: 'Credit Card' },
      { value: 'debit', label: 'Debit Card' },
      { value: 'paypal', label: 'PayPal' },
    ],
    helperText: 'Select your preferred payment method',
  },
};

export const Error: Story = {
  args: {
    label: 'Invalid Selection',
    options: sampleOptions,
    error: true,
    helperText: 'Please select a valid option',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Group',
    value: 'option1',
    options: sampleOptions,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading - Fetching available options...',
    options: longOptions,
    loading: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Shows the loading skeleton state for radio button groups with multiple options.',
      },
    },
  },
};