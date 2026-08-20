import type { Meta, StoryObj } from '@storybook/react';
import { Container5 } from './Container5';

const meta: Meta<typeof Container5> = {
  title: "Components/Container 5",
  component: Container5,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Container 5`\n- **Figma Node ID**: `137:1612`\n- **Category**: `CONTAINER`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container5>;

export const Default: Story = {};
