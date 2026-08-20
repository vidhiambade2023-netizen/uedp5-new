import type { Meta, StoryObj } from '@storybook/react';
import { Container4 } from './Container4';

const meta: Meta<typeof Container4> = {
  title: "Components/Container 4",
  component: Container4,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Container 4`\n- **Figma Node ID**: `137:1610`\n- **Category**: `CONTAINER`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container4>;

export const Default: Story = {};
