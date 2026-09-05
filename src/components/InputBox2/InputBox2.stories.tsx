import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputBox2 } from './InputBox2';

const meta: Meta<typeof InputBox2> = {
  title: 'Components/Input Box 2',
  component: InputBox2,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: Input Box 2

- **Figma Layer Name**: \`input box-2\`
- **Figma Node ID**: \`33:2302\`
- **Design Features**: Stadium input pill featuring copy icon on the right and a circular submit action button (\`→\`). Supports 4 background state variants.
`,
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'shadow', 'cream']
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBox2>;

export const Default: Story = {
  args: {
    placeholder: 'enter text',
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    placeholder: 'enter text',
    state: 'disabled'
  }
};

export const ShadowState: Story = {
  args: {
    placeholder: 'enter text',
    state: 'shadow'
  }
};

export const CreamState: Story = {
  args: {
    placeholder: 'enter text',
    state: 'cream'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '36px', maxWidth: '440px', background: '#ffffff', borderRadius: '20px', border: '1px solid #e5e7eb', alignItems: 'center' }}>
      <InputBox2 placeholder="enter text" state="default" />
      <InputBox2 placeholder="enter text" state="disabled" />
      <InputBox2 placeholder="enter text" state="shadow" />
      <InputBox2 placeholder="enter text" state="cream" />
    </div>
  )
};

