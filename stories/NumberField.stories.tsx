import type { Meta, StoryObj } from '@storybook/react';
import { NumberField } from '../src/components/fields';

const meta: Meta<typeof NumberField> = {
  title: 'Components/NumberField',
  component: NumberField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A numeric input field with min/max/step validation and consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the number field',
    },
    value: {
      control: 'number',
      description: 'The numeric value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when the field is empty',
    },
    min: {
      control: 'number',
      description: 'Minimum allowed value',
    },
    max: {
      control: 'number',
      description: 'Maximum allowed value',
    },
    step: {
      control: 'number',
      description: 'Step increment for the number input',
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
    label: 'Quantity',
    placeholder: 'Enter quantity',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Age',
    value: 25,
    placeholder: 'Enter your age',
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Rating',
    min: 1,
    max: 10,
    placeholder: 'Rate from 1-10',
  },
};

export const WithStep: Story = {
  args: {
    label: 'Price',
    step: 0.01,
    placeholder: 'Enter price',
    helperText: 'Enter price with cents (e.g., 19.99)',
  },
};

export const FullValidation: Story = {
  args: {
    label: 'Percentage',
    min: 0,
    max: 100,
    step: 1,
    placeholder: 'Enter percentage',
    helperText: 'Value must be between 0 and 100',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Number',
    required: true,
    placeholder: 'This field is required',
  },
};

export const Error: Story = {
  args: {
    label: 'Invalid Number',
    error: true,
    helperText: 'Please enter a valid number',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Number Field',
    value: 42,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading - Setting up number input validation...',
    loading: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Shows the loading skeleton state for numeric input components.',
      },
    },
  },
};