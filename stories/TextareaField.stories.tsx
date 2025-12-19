import type { Meta, StoryObj } from '@storybook/react';
import { TextareaField } from '../src/components/fields';

const meta: Meta<typeof TextareaField> = {
  title: 'Components/TextareaField',
  component: TextareaField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A multi-line text input field with consistent styling and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the textarea field',
    },
    value: {
      control: 'text',
      description: 'The value of the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when the field is empty',
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of rows to display',
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
    label: 'Comments',
    placeholder: 'Enter your comments here...',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Description',
    value: 'This is a sample description that shows how the textarea handles longer text content.',
    placeholder: 'Enter description',
  },
};

export const MultipleRows: Story = {
  args: {
    label: 'Long Description',
    rows: 6,
    placeholder: 'Enter a detailed description...',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Comments',
    required: true,
    placeholder: 'Please provide your feedback',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Tell us what you think...',
    helperText: 'Maximum 500 characters',
  },
};

export const Error: Story = {
  args: {
    label: 'Invalid Input',
    error: true,
    helperText: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read-only Text',
    value: 'This textarea is disabled and cannot be edited.',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading - Preparing text area for input...',
    rows: 4,
    loading: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Shows the loading skeleton state for multi-line text areas.',
      },
    },
  },
};