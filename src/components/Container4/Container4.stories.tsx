import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container4 } from './Container4';

const meta: Meta<typeof Container4> = {
  title: 'Components/Container 4',
  component: Container4,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: Container 4

- **Figma Layer Name**: \`container-4\`
- **Figma Node ID**: \`30:2015\`
- **Design Features**: Product row item with banana graphic thumbnail, title, pieces label, and quantity stepper controls (- 1 +). Supports 4 background state variants.
`,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    piecesText: { control: 'text' },
    quantity: { control: 'number' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'shadow', 'tint']
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container4>;

export const Default: Story = {
  args: {
    title: 'enter your text',
    piecesText: '0 pieces',
    quantity: 1,
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    title: 'enter your text',
    piecesText: '0 pieces',
    quantity: 1,
    state: 'disabled'
  }
};

export const ShadowState: Story = {
  args: {
    title: 'enter your text',
    piecesText: '0 pieces',
    quantity: 1,
    state: 'shadow'
  }
};

export const TintState: Story = {
  args: {
    title: 'enter your text',
    piecesText: '0 pieces',
    quantity: 1,
    state: 'tint'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '36px', maxWidth: '480px', background: '#ffffff', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
      <Container4 title="enter your text" piecesText="0 pieces" quantity={1} state="default" />
      <Container4 title="enter your text" piecesText="0 pieces" quantity={1} state="disabled" />
      <Container4 title="enter your text" piecesText="0 pieces" quantity={1} state="shadow" />
      <Container4 title="enter your text" piecesText="0 pieces" quantity={1} state="tint" />
    </div>
  )
};

