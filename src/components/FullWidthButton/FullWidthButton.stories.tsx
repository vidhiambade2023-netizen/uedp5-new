import type { Meta, StoryObj } from '@storybook/react';
import { FullWidthButton } from './FullWidthButton';

const meta: Meta<typeof FullWidthButton> = {
  title: "Components/Full Width Button",
  component: FullWidthButton,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Full Width Button`\n- **Figma Node ID**: `137:1601`\n- **Category**: `BUTTON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FullWidthButton>;

export const Default: Story = {};
