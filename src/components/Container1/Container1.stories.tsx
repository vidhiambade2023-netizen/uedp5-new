import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container1 } from './Container1';

const meta: Meta<typeof Container1> = {
  title: "Components/Container 1",
  component: Container1,
  parameters: {
    docs: {
      description: {
        component: `### Figma Component Specification: \`container-1\` (Node ID: \`29:1103\`)
- **Shape**: Rounded horizontal card container (\`border-radius: 24px\`).
- **Content**: Header text (\`enter your text\`), subtext meta (\`0 items • 0 added today\`), and circular green right arrow button.
- **Variants**: Default (White with Slate Border), Disabled (Pale Grey Slate Fill), Shadow (White with Drop Shadow), Cream (Pale Cream Yellow Fill).`,
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
    itemsCount: {
      control: 'number',
      description: 'Items count'
    },
    addedTodayCount: {
      control: 'number',
      description: 'Added today count'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Container1>;

export const Default: Story = {
  args: {
    title: 'enter your text',
    itemsCount: 0,
    addedTodayCount: 0,
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
 * Renders all 4 variants stacked vertically matching Figma node-id=29-1103 screenshot
 */
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 36, background: '#ffffff', borderRadius: 16, maxWidth: 440, border: '1px dashed #a855f7' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: 16, color: '#8b5cf6', fontFamily: 'monospace' }}>❖ container-1</h3>
        <span style={{ fontSize: 14, color: '#8b5cf6', fontFamily: 'monospace' }}>&lt;/&gt;</span>
      </div>
      <Container1 state="default" title="enter your text" />
      <Container1 state="disabled" title="enter your text" />
      <Container1 state="shadow" title="enter your text" />
      <Container1 state="cream" title="enter your text" />
    </div>
  )
};
