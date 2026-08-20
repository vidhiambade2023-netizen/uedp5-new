import type { Meta, StoryObj } from '@storybook/react';
import { Cards2 } from './Cards2';

const meta: Meta<typeof Cards2> = {
  title: "Components/Cards 2",
  component: Cards2,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Cards 2`\n- **Figma Node ID**: `137:1621`\n- **Category**: `CARD`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cards2>;

export const Default: Story = {};
