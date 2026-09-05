import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryButton } from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
  title: 'Components/Secondary Button',
  component: SecondaryButton,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: Secondary Button

- **Figma Layer Name**: \`secondary button\`
- **Figma Node ID**: \`30:1836\`
- **Design Features**: Fully rounded stadium/pill shape with circle plus icon (\`⊕\`), dark green typography, and 4 background state variants (Outlined White, Slate Grey, Ice Blue, Cream Yellow).
`,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    showIcon: { control: 'boolean' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'ice', 'cream']
    },
  },
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
  args: {
    label: 'button',
    showIcon: true,
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    label: 'button',
    showIcon: true,
    state: 'disabled'
  }
};

export const IceVariant: Story = {
  args: {
    label: 'button',
    showIcon: true,
    state: 'ice'
  }
};

export const CreamVariant: Story = {
  args: {
    label: 'button',
    showIcon: true,
    state: 'cream'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '32px', maxWidth: '320px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', alignItems: 'center' }}>
      <SecondaryButton label="button" state="default" showIcon={true} />
      <SecondaryButton label="button" state="disabled" showIcon={true} />
      <SecondaryButton label="button" state="ice" showIcon={true} />
      <SecondaryButton label="button" state="cream" showIcon={true} />
    </div>
  )
};

