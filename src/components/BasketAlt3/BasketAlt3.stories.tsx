import type { Meta, StoryObj } from '@storybook/react';
import { BasketAlt3 } from './BasketAlt3';

const meta: Meta<typeof BasketAlt3> = {
  title: "Components/Basket Alt 3",
  component: BasketAlt3,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Basket Alt 3`\n- **Figma Node ID**: `137:1636`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BasketAlt3>;

export const Default: Story = {};
