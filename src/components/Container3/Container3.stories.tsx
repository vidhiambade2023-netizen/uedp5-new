import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container3 } from './Container3';

const meta: Meta<typeof Container3> = {
  title: "Components/Container 3",
  component: Container3,
  parameters: {
    docs: {
      description: {
        component: `### Figma Component Specification: \`container-3\` (Node ID: \`29:1316\`)
- **Shape**: Vertical snack product card (\`195px\` x \`275px\`, \`border-radius: 20px\`).
- **Content**: Product snack image illustration, floating ADD 4 options badge, header text (\`enter text\`), weight (\`00 g\`), Swiggy logo price tag (\`₹ 00\`), discount badge (\`00% off\`), and circular green floating plus button.
- **Variants**: Default (White), Disabled (Pale Grey Slate Fill), Shadow (White with Drop Shadow), Cream (Pale Cream Yellow Fill).`,
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
      description: 'Product title'
    },
    weightText: {
      control: 'text',
      description: 'Weight / Quantity'
    },
    priceText: {
      control: 'text',
      description: 'Price text'
    },
    discountText: {
      control: 'text',
      description: 'Discount text'
    },
    addOptionsText: {
      control: 'text',
      description: 'ADD badge options text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Container3>;

export const Default: Story = {
  args: {
    title: 'enter text',
    weightText: '00 g',
    priceText: '₹ 00',
    discountText: '00% off',
    addOptionsText: '4 options',
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
 * Renders the 2x2 grid layout matching Figma node-id=29-1316 container-3 screenshot
 */
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 36, background: '#ffffff', borderRadius: 16, maxWidth: 460, border: '1px dashed #a855f7' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: 16, color: '#8b5cf6', fontFamily: 'monospace' }}>❖ container-3</h3>
        <span style={{ fontSize: 14, color: '#8b5cf6', fontFamily: 'monospace' }}>&lt;/&gt;</span>
      </div>

      {/* 2x2 Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Container3 state="default" title="enter text" />
        <Container3 state="disabled" title="enter text" />
        <Container3 state="shadow" title="enter text" />
        <Container3 state="cream" title="enter text" />
      </div>
    </div>
  )
};
