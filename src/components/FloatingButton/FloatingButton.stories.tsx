import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FloatingButton } from './FloatingButton';

const meta: Meta<typeof FloatingButton> = {
  title: 'Components/Floating Button',
  component: FloatingButton,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: Floating Button

- **Figma Layer Name**: \`floating button\`
- **Figma Node ID**: \`49:2866\`
- **Design Features**: Floating stadium/pill bar featuring banana graphic thumbnail, underlined "VIEW CART" title, "0 item added" subtitle, and golden yellow chevron arrow action button. Supports 4 background color variants.
`,
      },
    },
  },
  argTypes: {
    titleText: { control: 'text' },
    subtitleText: { control: 'text' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'vibrantGreen', 'pastelYellow']
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  args: {
    titleText: 'VIEW CART',
    subtitleText: '0 item added',
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    titleText: 'VIEW CART',
    subtitleText: '0 item added',
    state: 'disabled'
  }
};

export const VibrantGreenVariant: Story = {
  args: {
    titleText: 'VIEW CART',
    subtitleText: '0 item added',
    state: 'vibrantGreen'
  }
};

export const PastelYellowVariant: Story = {
  args: {
    titleText: 'VIEW CART',
    subtitleText: '0 item added',
    state: 'pastelYellow'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '36px', maxWidth: '400px', background: '#ffffff', borderRadius: '20px', border: '1px solid #e5e7eb', alignItems: 'center' }}>
      <FloatingButton titleText="VIEW CART" subtitleText="0 item added" state="default" />
      <FloatingButton titleText="VIEW CART" subtitleText="0 item added" state="disabled" />
      <FloatingButton titleText="VIEW CART" subtitleText="0 item added" state="vibrantGreen" />
      <FloatingButton titleText="VIEW CART" subtitleText="0 item added" state="pastelYellow" />
    </div>
  )
};

