import type { Meta, StoryObj } from '@storybook/react';
import { Cards } from './Cards';

const meta: Meta<typeof Cards> = {
  title: "Components/Cards",
  component: Cards,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Cards`\n- **Figma Node ID**: `137:1617`\n- **Category**: `CARD`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const Default: Story = {};
