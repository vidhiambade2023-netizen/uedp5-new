import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputBox } from './InputBox';

const meta: Meta<typeof InputBox> = {
  title: "Components/Input Box",
  component: InputBox,
  parameters: {
    docs: {
      description: {
        component: `### Figma Component Specification: \`input box\` (Node ID: \`23:719\`)
- **Shape**: Pill rounded container (\`border-radius: 9999px\`).
- **Icon**: Dual document / copy overlap vector icon on left.
- **Typography**: Inter/system-ui bold pill text (\`enter your email\`).
- **Variants**: Default, Focus/Hover, Disabled, Shadow/Elevated, and Error states.`,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'focus', 'disabled', 'shadow', 'error'],
      description: 'Figma variant state'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder input text'
    },
    hasIcon: {
      control: 'boolean',
      description: 'Show left icon'
    }
  }
};

export default meta;
type Story = StoryObj<typeof InputBox>;

export const Default: Story = {
  args: {
    placeholder: 'enter your email',
    state: 'default',
    hasIcon: true
  }
};

export const FocusState: Story = {
  args: {
    ...Default.args,
    state: 'focus'
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

export const ErrorState: Story = {
  args: {
    ...Default.args,
    state: 'error'
  }
};

/**
 * Renders all 5 variants stacked vertically matching Figma node-id=23-719 screenshot
 */
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, background: '#f8fafc', borderRadius: 16, maxWidth: 420 }}>
      <h3 style={{ margin: 0, fontSize: 16, color: '#8b5cf6', fontFamily: 'monospace' }}>❖ input box</h3>
      <InputBox state="default" placeholder="enter your email" />
      <InputBox state="focus" placeholder="enter your email" />
      <InputBox state="disabled" placeholder="enter your email" />
      <InputBox state="shadow" placeholder="enter your email" />
      <InputBox state="error" placeholder="enter your email" />
    </div>
  )
};
