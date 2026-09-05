import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TagButton } from './TagButton';

const meta: Meta<typeof TagButton> = {
  title: "Components/Tag Button",
  component: TagButton,
  parameters: {
    docs: {
      description: {
        component: `### Figma Component Specification: \`tag button\` (Node ID: \`29:1558\`)
- **Shape**: Rounded pill tag button (\`border-radius: 18px\`, \`130px\` x \`50px\`).
- **Typography**: Medium weight weight text (\`0 kg\`).
- **Variants**: Default (White Outline), Filled (Dark Forest Green Fill), Disabled (Pale Slate Grey Fill), Shadow (White with Drop Shadow), Cream (Pale Cream Yellow Fill).`,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'filled', 'disabled', 'shadow', 'cream'],
      description: 'Figma variant state'
    },
    tag: {
      control: 'text',
      description: 'Tag text label'
    }
  }
};

export default meta;
type Story = StoryObj<typeof TagButton>;

export const Default: Story = {
  args: {
    tag: '0 kg',
    state: 'default'
  }
};

export const FilledState: Story = {
  args: {
    ...Default.args,
    state: 'filled'
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
 * Renders all 5 variants stacked vertically matching Figma node-id=29-1558 tag button screenshot
 */
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 36, background: '#ffffff', borderRadius: 16, width: 220, border: '1px dashed #a855f7', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h3 style={{ margin: 0, fontSize: 15, color: '#8b5cf6', fontFamily: 'monospace' }}>❖ tag button</h3>
        <span style={{ fontSize: 14, color: '#8b5cf6', fontFamily: 'monospace' }}>&lt;/&gt;</span>
      </div>
      <TagButton state="default" tag="0 kg" />
      <TagButton state="filled" tag="0 kg" />
      <TagButton state="disabled" tag="0 kg" />
      <TagButton state="shadow" tag="0 kg" />
      <TagButton state="cream" tag="0 kg" />
    </div>
  )
};
