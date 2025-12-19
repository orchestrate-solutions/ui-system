import type { Meta, StoryObj } from '@storybook/react';
import { DateField } from '../src/components/fields';

const meta: Meta<typeof DateField> = {
  title: 'Components/DateField',
  component: DateField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A date input field with consistent styling and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the date field',
    },
    value: {
      control: 'date',
      description: 'The selected date value',
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
    label: 'Birth Date',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Event Date',
    value: '2024-12-25',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Date',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Appointment Date',
    helperText: 'Please select a date and time for your appointment',
  },
};

export const Error: Story = {
  args: {
    label: 'Invalid Date',
    error: true,
    helperText: 'Please select a valid date',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Date Field',
    value: '2024-01-01',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading - Initializing date picker...',
    loading: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Shows the loading skeleton state for date input components.',
      },
    },
  },
};