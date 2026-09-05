import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button2 } from './Button2';

const meta: Meta<typeof Button2> = {
  title: "Components/Button 2",
  component: Button2,
  parameters: {
    docs: {
      description: {
        component: `### Figma Component Specification: \`button-2\` (Node ID: \`29:994\`)
- **Shape**: Circular icon button (\`border-radius: 50%\`).
- **Icon**: Centered right arrow vector icon (\`→\`).
- **Sizes**: Large (\`72px\`) and Small (\`44px\`).
- **Variants**: Default (Dark Forest Green), Disabled (Muted Slate Grey), Hover (Vibrant Emerald Green with Shadow), Active (Deep Dark Forest Green with Shadow).`,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'small'],
      description: 'Button size'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'hover', 'active'],
      description: 'Figma variant state'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button2>;

export const DefaultLarge: Story = {
  args: {
    size: 'large',
    state: 'default'
  }
};

export const DefaultSmall: Story = {
  args: {
    size: 'small',
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    size: 'large',
    state: 'disabled'
  }
};

export const HoverState: Story = {
  args: {
    size: 'large',
    state: 'hover'
  }
};

export const ActiveState: Story = {
  args: {
    size: 'large',
    state: 'active'
  }
};

/**
 * Renders the 2x4 grid layout showing Large & Small for all 4 variant states matching Figma node-id=29-994 screenshot
 */
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, padding: 36, background: '#ffffff', borderRadius: 16, maxWidth: 360, border: '1px dashed #a855f7' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: 16, color: '#8b5cf6', fontFamily: 'monospace' }}>❖ button-2</h3>
        <span style={{ fontSize: 14, color: '#8b5cf6', fontFamily: 'monospace' }}>&lt;/&gt;</span>
      </div>

      {/* Row 1: Default */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button2 size="large" state="default" />
        <Button2 size="small" state="default" />
      </div>

      {/* Row 2: Disabled */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button2 size="large" state="disabled" />
        <Button2 size="small" state="disabled" />
      </div>

      {/* Row 3: Hover */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button2 size="large" state="hover" />
        <Button2 size="small" state="hover" />
      </div>

      {/* Row 4: Active */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button2 size="large" state="active" />
        <Button2 size="small" state="active" />
      </div>
    </div>
  )
};
