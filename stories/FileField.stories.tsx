import type { Meta, StoryObj } from '@storybook/react';
import { FileField } from '../src/components/fields';

const meta: Meta<typeof FileField> = {
  title: 'Components/FileField',
  component: FileField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A file upload field with consistent styling and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the file field',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g., ".jpg,.png,.pdf")',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple files can be selected',
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
    label: 'Upload File',
  },
};

export const WithAcceptTypes: Story = {
  args: {
    label: 'Upload Image',
    accept: '.jpg,.jpeg,.png,.gif',
    helperText: 'Accepted formats: JPG, PNG, GIF',
  },
};

export const MultipleFiles: Story = {
  args: {
    label: 'Upload Multiple Files',
    multiple: true,
    helperText: 'You can select multiple files',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Document',
    required: true,
    accept: '.pdf,.doc,.docx',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Profile Picture',
    accept: '.jpg,.png',
    helperText: 'Upload a profile picture (max 5MB)',
  },
};

export const Error: Story = {
  args: {
    label: 'Invalid File',
    error: true,
    helperText: 'Please select a valid file',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Upload',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading - Preparing file upload area...',
    loading: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Shows the loading skeleton state for file upload components.',
      },
    },
  },
};