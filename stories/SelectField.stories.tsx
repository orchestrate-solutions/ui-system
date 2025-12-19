import type { Meta, StoryObj } from '@storybook/react';
import { SelectField } from '../src/components/fields';

const meta: Meta<typeof SelectField> = {
  title: 'Components/SelectField',
  component: SelectField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown select field with consistent styling and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the select field',
    },
    value: {
      control: 'text',
      description: 'The selected value',
    },
    options: {
      control: 'object',
      description: 'Array of options with value and label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
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

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    label: 'Select Option',
    options: sampleOptions,
    placeholder: 'Choose an option',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Selected Option',
    value: 'option2',
    options: sampleOptions,
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
    label: 'Country',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'mx', label: 'Mexico' },
    ],
    helperText: 'Select your country of residence',
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
    label: 'Disabled Field',
    value: 'option1',
    options: sampleOptions,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading - Fetching available options...',
    options: [],
    loading: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Shows the loading skeleton state while options are being fetched.',
      },
    },
  },
};