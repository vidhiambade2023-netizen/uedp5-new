import type { Meta, StoryObj } from '@storybook/react';
import { QuickActionCards } from './QuickActionCards';

const meta: Meta<typeof QuickActionCards> = {
  title: "Components/Quick Action Cards",
  component: QuickActionCards,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Quick Action Cards`\n- **Figma Node ID**: `137:1603`\n- **Category**: `QUICK_ACTION_CARD`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuickActionCards>;

export const Default: Story = {};
