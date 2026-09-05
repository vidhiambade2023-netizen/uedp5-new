import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopBar } from './TopBar';

const meta: Meta<typeof TopBar> = {
  title: 'Components/Top Bar',
  component: TopBar,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: Top Bar

- **Figma Layer Name**: \`top bar\`
- **Figma Node ID**: \`35:2389\`
- **Design Features**: Top bar header row featuring back chevron button (\`<\`), bold "List Name" title, "0 items • updated now" subtitle, and share action button. Supports 4 background state variants.
`,
      },
    },
  },
  argTypes: {
    listName: { control: 'text' },
    subtitleText: { control: 'text' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'shadow', 'cream']
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    listName: 'List Name',
    subtitleText: '0 items  •  updated now',
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    listName: 'List Name',
    subtitleText: '0 items  •  updated now',
    state: 'disabled'
  }
};

export const ShadowState: Story = {
  args: {
    listName: 'List Name',
    subtitleText: '0 items  •  updated now',
    state: 'shadow'
  }
};

export const CreamState: Story = {
  args: {
    listName: 'List Name',
    subtitleText: '0 items  •  updated now',
    state: 'cream'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', padding: '36px', maxWidth: '480px', background: '#ffffff', borderRadius: '20px', border: '1px solid #e5e7eb', alignItems: 'center' }}>
      <TopBar listName="List Name" subtitleText="0 items  •  updated now" state="default" />
      <TopBar listName="List Name" subtitleText="0 items  •  updated now" state="disabled" />
      <TopBar listName="List Name" subtitleText="0 items  •  updated now" state="shadow" />
      <TopBar listName="List Name" subtitleText="0 items  •  updated now" state="cream" />
    </div>
  )
};

