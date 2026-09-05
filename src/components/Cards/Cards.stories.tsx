import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Cards } from './Cards';

const meta: Meta<typeof Cards> = {
  title: 'Components/Cards',
  component: Cards,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component: Cards

- **Figma Layer Name**: \`cards\`
- **Figma Node ID**: \`52:243\`
- **Design Features**: Vertical brand card featuring BigBasket green logo circle, Name title, "₹ 00" price, and "0 orders placed" subtitle. Supports 4 background color variants.
`,
      },
    },
  },
  argTypes: {
    nameText: { control: 'text' },
    priceText: { control: 'text' },
    ordersText: { control: 'text' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'yellow', 'mint']
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const Default: Story = {
  args: {
    nameText: 'Name',
    priceText: '₹ 00',
    ordersText: '0 orders placed',
    state: 'default'
  }
};

export const DisabledState: Story = {
  args: {
    nameText: 'Name',
    priceText: '₹ 00',
    ordersText: '0 orders placed',
    state: 'disabled'
  }
};

export const YellowVariant: Story = {
  args: {
    nameText: 'Name',
    priceText: '₹ 00',
    ordersText: '0 orders placed',
    state: 'yellow'
  }
};

export const MintVariant: Story = {
  args: {
    nameText: 'Name',
    priceText: '₹ 00',
    ordersText: '0 orders placed',
    state: 'mint'
  }
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 185px)', gap: '32px', padding: '36px', width: 'fit-content', background: '#ffffff', borderRadius: '24px', border: '1px solid #e5e7eb' }}>
      <Cards nameText="Name" priceText="₹ 00" ordersText="0 orders placed" state="default" />
      <Cards nameText="Name" priceText="₹ 00" ordersText="0 orders placed" state="disabled" />
      <Cards nameText="Name" priceText="₹ 00" ordersText="0 orders placed" state="yellow" />
      <Cards nameText="Name" priceText="₹ 00" ordersText="0 orders placed" state="mint" />
    </div>
  )
};

