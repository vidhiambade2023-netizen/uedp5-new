import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container2 } from './Container2';

const meta: Meta<typeof Container2> = {
  title: "Components/Container 2",
  component: Container2,
  parameters: {
    docs: {
      description: {
        component: `### Figma Component Specification: \`container-2\` (Node ID: \`29:1103\`)
- **Shape**: Horizontal list item card (\`border-radius: 16px\`).
- **Content**: Swiggy orange logo avatar, header text (\`enter text\`), lime green pill badge (\`cheapest\`), and price tag (\`₹00\`).
- **Variants**: Default (White), Disabled (Pale Slate Grey Fill with Muted Badge), Shadow (White with Icon & Badge Drop Shadows), Cream (Pale Cream Yellow Fill).`,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'shadow', 'cream'],
      description: 'Figma variant state'
    },
    title: {
      control: 'text',
      description: 'Card title text'
    },
    badgeText: {
      control: 'text',
      description: 'Badge pill text'
    },
    priceText: {
      control: 'text',
      description: 'Price text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Container2>;

export const Default: Story = {
  args: {
    title: 'enter text',
    badgeText: 'cheapest',
    priceText: '₹00',
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    ...Default.args,
    state: 'disabled'
  }
};

export const ShadowState: Story = {
  args: {
    ...Default.args,
    state: 'shadow'
  }
};

export const CreamState: Story = {
  args: {
    ...Default.args,
    state: 'cream'
  }
};

/**
 * Renders all 4 variants stacked vertically matching Figma node-id=29-1103 container-2 screenshot
 */
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 36, background: '#ffffff', borderRadius: 16, maxWidth: 440, border: '1px dashed #a855f7' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: 16, color: '#8b5cf6', fontFamily: 'monospace' }}>❖ container-2</h3>
        <span style={{ fontSize: 14, color: '#8b5cf6', fontFamily: 'monospace' }}>&lt;/&gt;</span>
      </div>
      <Container2 state="default" title="enter text" badgeText="cheapest" priceText="₹00" />
      <Container2 state="disabled" title="enter text" badgeText="cheapest" priceText="₹00" />
      <Container2 state="shadow" title="enter text" badgeText="cheapest" priceText="₹00" />
      <Container2 state="cream" title="enter text" badgeText="cheapest" priceText="₹00" />
    </div>
  )
};
