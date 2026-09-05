import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'Components/List Item',
  component: ListItem,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: List Item

- **Figma Layer Name**: \`list item\`
- **Figma Node ID**: \`35:2549\`
- **Design Features**: Product row item featuring yellow radio selection circle, "Enter product name" title, yellow circular compare bracket button, and dark green right chevron arrow. Supports 5 state variants.
`,
      },
    },
  },
  argTypes: {
    productName: { control: 'text' },
    selected: { control: 'boolean' },
    state: {
      control: { type: 'select' },
      options: ['default', 'placeholder', 'disabled', 'shadow', 'cream']
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    productName: 'Enter product name',
    selected: false,
    state: 'default'
  }
};

export const PlaceholderState: Story = {
  args: {
    productName: 'Enter product name',
    selected: false,
    state: 'placeholder'
  }
};

export const DisabledState: Story = {
  args: {
    productName: 'Enter product name',
    selected: false,
    state: 'disabled'
  }
};

export const ShadowState: Story = {
  args: {
    productName: 'Enter product name',
    selected: false,
    state: 'shadow'
  }
};

export const CreamState: Story = {
  args: {
    productName: 'Enter product name',
    selected: false,
    state: 'cream'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '36px', maxWidth: '480px', background: '#ffffff', borderRadius: '20px', border: '1px solid #e5e7eb', alignItems: 'center' }}>
      <ListItem productName="Enter product name" state="default" />
      <ListItem productName="Enter product name" state="placeholder" />
      <ListItem productName="Enter product name" state="disabled" />
      <ListItem productName="Enter product name" state="shadow" />
      <ListItem productName="Enter product name" state="cream" />
    </div>
  )
};

