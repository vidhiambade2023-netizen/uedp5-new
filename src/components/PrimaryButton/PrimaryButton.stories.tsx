import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/Primary Button',
  component: PrimaryButton,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: Primary Button

- **Figma Layer Name**: \`primary button\`
- **Figma Node ID**: \`30:1827\`
- **Design Features**: Fully rounded stadium/pill shape with shopping cart icon, bold white typography, and dark green / slate grey color variants.
`,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    showIcon: { control: 'boolean' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'emerald', 'darkest']
    },
  },
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

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

export const EmeraldVariant: Story = {
  args: {
    label: 'button',
    showIcon: true,
    state: 'emerald'
  }
};

export const DarkestVariant: Story = {
  args: {
    label: 'button',
    showIcon: true,
    state: 'darkest'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '32px', maxWidth: '320px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', alignItems: 'center' }}>
      <PrimaryButton label="button" state="default" showIcon={true} />
      <PrimaryButton label="button" state="disabled" showIcon={true} />
      <PrimaryButton label="button" state="emerald" showIcon={true} />
      <PrimaryButton label="button" state="darkest" showIcon={true} />
    </div>
  )
};

