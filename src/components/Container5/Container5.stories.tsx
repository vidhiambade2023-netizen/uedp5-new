import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container5 } from './Container5';

const meta: Meta<typeof Container5> = {
  title: 'Components/Container 5',
  component: Container5,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: Container 5

- **Figma Layer Name**: \`container-5\`
- **Figma Node ID**: \`33:2072\`
- **Design Features**: App row card with Swiggy brand logo icon, app name title, item subtitle, and BUY action button. Supports 4 background state variants.
`,
      },
    },
  },
  argTypes: {
    appNameText: { control: 'text' },
    itemText: { control: 'text' },
    buyButtonText: { control: 'text' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'shadow', 'cream']
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container5>;

export const Default: Story = {
  args: {
    appNameText: 'enter app name',
    itemText: '0 item',
    buyButtonText: 'BUY',
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    appNameText: 'enter app name',
    itemText: '0 item',
    buyButtonText: 'BUY',
    state: 'disabled'
  }
};

export const ShadowState: Story = {
  args: {
    appNameText: 'enter app name',
    itemText: '0 item',
    buyButtonText: 'BUY',
    state: 'shadow'
  }
};

export const CreamState: Story = {
  args: {
    appNameText: 'enter app name',
    itemText: '0 item',
    buyButtonText: 'BUY',
    state: 'cream'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '36px', maxWidth: '480px', background: '#ffffff', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
      <Container5 appNameText="enter app name" itemText="0 item" buyButtonText="BUY" state="default" />
      <Container5 appNameText="enter app name" itemText="0 item" buyButtonText="BUY" state="disabled" />
      <Container5 appNameText="enter app name" itemText="0 item" buyButtonText="BUY" state="shadow" />
      <Container5 appNameText="enter app name" itemText="0 item" buyButtonText="BUY" state="cream" />
    </div>
  )
};

