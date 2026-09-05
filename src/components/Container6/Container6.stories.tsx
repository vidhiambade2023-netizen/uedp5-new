import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container6 } from './Container6';

const meta: Meta<typeof Container6> = {
  title: 'Components/Container 6',
  component: Container6,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: Container 6

- **Figma Layer Name**: \`container-6\`
- **Figma Node ID**: \`33:2189\`
- **Design Features**: Saving Insight summary card featuring star icon, "You saved:" vs "Total:" metrics, comparison subtext ("vs ₹ 00"), and 4 pastel gradient fill state variants.
`,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    savedLabel: { control: 'text' },
    savedAmount: { control: 'text' },
    totalLabel: { control: 'text' },
    totalAmount: { control: 'text' },
    comparisonText: { control: 'text' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'vibrant', 'limeYellow']
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container6>;

export const Default: Story = {
  args: {
    title: 'Saving Insight',
    savedLabel: 'You saved:',
    savedAmount: '₹ 00',
    totalLabel: 'Total:',
    totalAmount: '₹ 00',
    comparisonText: 'vs ₹ 00',
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    title: 'Saving Insight',
    savedLabel: 'You saved:',
    savedAmount: '₹ 00',
    totalLabel: 'Total:',
    totalAmount: '₹ 00',
    comparisonText: 'vs ₹ 00',
    state: 'disabled'
  }
};

export const VibrantVariant: Story = {
  args: {
    title: 'Saving Insight',
    savedLabel: 'You saved:',
    savedAmount: '₹ 00',
    totalLabel: 'Total:',
    totalAmount: '₹ 00',
    comparisonText: 'vs ₹ 00',
    state: 'vibrant'
  }
};

export const LimeYellowVariant: Story = {
  args: {
    title: 'Saving Insight',
    savedLabel: 'You saved:',
    savedAmount: '₹ 00',
    totalLabel: 'Total:',
    totalAmount: '₹ 00',
    comparisonText: 'vs ₹ 00',
    state: 'limeYellow'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '36px', maxWidth: '480px', background: '#ffffff', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
      <Container6 title="Saving Insight" savedAmount="₹ 00" totalAmount="₹ 00" comparisonText="vs ₹ 00" state="default" />
      <Container6 title="Saving Insight" savedAmount="₹ 00" totalAmount="₹ 00" comparisonText="vs ₹ 00" state="disabled" />
      <Container6 title="Saving Insight" savedAmount="₹ 00" totalAmount="₹ 00" comparisonText="vs ₹ 00" state="vibrant" />
      <Container6 title="Saving Insight" savedAmount="₹ 00" totalAmount="₹ 00" comparisonText="vs ₹ 00" state="limeYellow" />
    </div>
  )
};

