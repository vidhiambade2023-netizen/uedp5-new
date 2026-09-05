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
- **Boolean Property**: \`isCheapest\` (\`true\` displays the \`cheapest\` badge tag, \`false\` hides the tag completely).
- **Variants**: Default (White), Disabled (Pale Slate Grey Fill), Shadow (White with Drop Shadows), Cream (Pale Cream Yellow Fill).`,
      },
    },
  },
  argTypes: {
    isCheapest: {
      control: 'boolean',
      description: 'Boolean property: true shows the cheapest badge tag, false hides it'
    },
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

export const DefaultWithBadge: Story = {
  args: {
    title: 'enter text',
    isCheapest: true,
    badgeText: 'cheapest',
    priceText: '₹00',
    state: 'default'
  }
};

export const WithoutBadge: Story = {
  args: {
    ...DefaultWithBadge.args,
    isCheapest: false
  }
};

export const DisabledState: Story = {
  args: {
    ...DefaultWithBadge.args,
    state: 'disabled'
  }
};

export const ShadowState: Story = {
  args: {
    ...DefaultWithBadge.args,
    state: 'shadow'
  }
};

export const CreamState: Story = {
  args: {
    ...DefaultWithBadge.args,
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
      <Container2 state="default" isCheapest={true} title="enter text" priceText="₹00" />
      <Container2 state="disabled" isCheapest={true} title="enter text" priceText="₹00" />
      <Container2 state="shadow" isCheapest={true} title="enter text" priceText="₹00" />
      <Container2 state="cream" isCheapest={true} title="enter text" priceText="₹00" />
    </div>
  )
};
