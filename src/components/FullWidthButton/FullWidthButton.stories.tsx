import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FullWidthButton } from './FullWidthButton';

const meta: Meta<typeof FullWidthButton> = {
  title: "Components/Full Width Button",
  component: FullWidthButton,
  parameters: {
    docs: {
      description: {
        component: `### Figma Component Specification: \`full width button\` (Node ID: \`23:668\`)
- **Shape**: Pill rounded button (\`border-radius: 9999px\`).
- **Icon**: Right arrow vector icon aligned on the right.
- **Typography**: Bold centered text (\`Button\`).
- **Variants**: Default (Dark Forest Green), Disabled (Muted Slate Grey), Hover (Vibrant Emerald Green), Active (Deep Forest Dark Green).`,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'hover', 'active'],
      description: 'Figma variant state'
    },
    label: {
      control: 'text',
      description: 'Button text label'
    },
    hasArrow: {
      control: 'boolean',
      description: 'Show right arrow icon'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FullWidthButton>;

export const Default: Story = {
  args: {
    label: 'Button',
    state: 'default',
    hasArrow: true
  }
};

export const DisabledState: Story = {
  args: {
    ...Default.args,
    state: 'disabled'
  }
};

export const HoverState: Story = {
  args: {
    ...Default.args,
    state: 'hover'
  }
};

export const ActiveState: Story = {
  args: {
    ...Default.args,
    state: 'active'
  }
};

/**
 * Renders all 4 variants stacked vertically matching Figma node-id=23-668 screenshot
 */
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 36, background: '#ffffff', borderRadius: 16, maxWidth: 440, border: '1px dashed #a855f7' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: 16, color: '#8b5cf6', fontFamily: 'monospace' }}>❖ full width button</h3>
        <span style={{ fontSize: 14, color: '#8b5cf6', fontFamily: 'monospace' }}>&lt;/&gt;</span>
      </div>
      <FullWidthButton state="default" label="Button" />
      <FullWidthButton state="disabled" label="Button" />
      <FullWidthButton state="hover" label="Button" />
      <FullWidthButton state="active" label="Button" />
    </div>
  )
};
