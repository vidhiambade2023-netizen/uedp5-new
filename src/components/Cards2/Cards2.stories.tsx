import type { Meta, StoryObj } from '@storybook/react';
import { Cards2 } from './Cards2';

const meta: Meta<typeof Cards2> = {
  title: "Components/Cards 2",
  component: Cards2,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `cards-2`\n- **Figma Node ID**: `37:2672`\n- **Category**: `CARD`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cards2>;

export const Default: Story = {
  args: {
    titleText: 'enter text',
    priceText: '₹00',
    saveText: 'save ₹00',
    state: 'default',
  },
};

export const DisabledState: Story = {
  args: {
    titleText: 'enter text',
    priceText: '₹00',
    saveText: 'save ₹00',
    state: 'disabled',
  },
};

export const ShadowState: Story = {
  args: {
    titleText: 'enter text',
    priceText: '₹00',
    saveText: 'save ₹00',
    state: 'shadow',
  },
};

export const ActiveState: Story = {
  args: {
    titleText: 'enter text',
    priceText: '₹00',
    saveText: 'save ₹00',
    state: 'active',
  },
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      padding: '32px 24px',
      border: '2px dashed #9333ea',
      borderRadius: '16px',
      backgroundColor: '#ffffff',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: '-14px',
        left: '16px',
        backgroundColor: '#ffffff',
        padding: '0 8px',
        color: '#9333ea',
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <span>❖</span> cards-2
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 220px)',
        gap: '24px',
      }}>
        <Cards2 state="default" />
        <Cards2 state="disabled" />
        <Cards2 state="shadow" />
        <Cards2 state="active" />
      </div>
    </div>
  ),
};

