import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { QuickActionCards } from './QuickActionCards';

const meta: Meta<typeof QuickActionCards> = {
  title: "Components/Quick Action Cards",
  component: QuickActionCards,
  parameters: {
    docs: {
      description: {
        component: `### Figma Component Specification: \`quick action cards\` (Node ID: \`23:800\`)
- **Shape**: Square tile card (\`150px\` x \`150px\`, \`border-radius: 28px\`).
- **Icon**: Frame/door vector icon with dashed right border.
- **Typography**: Dark green bold label (\`enter text\`).
- **Variants**: Default (Cream Yellow Outline), Disabled (Pale Grey Slate), Hover (Pastel Soft Yellow Fill), Active (Vibrant Sunny Yellow Fill).`,
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
      description: 'Tile label text'
    },
    hasIcon: {
      control: 'boolean',
      description: 'Show top vector icon'
    }
  }
};

export default meta;
type Story = StoryObj<typeof QuickActionCards>;

export const Default: Story = {
  args: {
    label: 'enter text',
    state: 'default',
    hasIcon: true
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
 * Renders all 4 variants stacked vertically matching Figma node-id=23-800 screenshot
 */
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 36, background: '#ffffff', borderRadius: 16, width: 220, border: '1px dashed #a855f7', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h3 style={{ margin: 0, fontSize: 15, color: '#8b5cf6', fontFamily: 'monospace' }}>❖ quick action ca...</h3>
        <span style={{ fontSize: 14, color: '#8b5cf6', fontFamily: 'monospace' }}>&lt;/&gt;</span>
      </div>
      <QuickActionCards state="default" label="enter text" />
      <QuickActionCards state="disabled" label="enter text" />
      <QuickActionCards state="hover" label="enter text" />
      <QuickActionCards state="active" label="enter text" />
    </div>
  )
};
