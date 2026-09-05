import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Checkbox`\n- **Figma Node ID**: `137:1620`\n- **Category**: `CHECKBOX`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    state: 'default',
  },
};

export const DisabledState: Story = {
  args: {
    state: 'disabled',
  },
};

export const CheckedState: Story = {
  args: {
    state: 'checked',
  },
};

export const ShadowState: Story = {
  args: {
    state: 'shadow',
  },
};

export const CheckedShadowState: Story = {
  args: {
    state: 'checkedShadow',
  },
};

export const CreamState: Story = {
  args: {
    state: 'cream',
  },
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      padding: '32px 24px',
      border: '2px dashed #9333ea',
      borderRadius: '16px',
      backgroundColor: '#ffffff',
      position: 'relative',
      minWidth: '100px'
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
        <span>❖</span> checkbox
      </div>
      <Checkbox state="default" />
      <Checkbox state="disabled" />
      <Checkbox state="checked" />
      <Checkbox state="shadow" />
      <Checkbox state="checkedShadow" />
      <Checkbox state="cream" />
    </div>
  ),
};

