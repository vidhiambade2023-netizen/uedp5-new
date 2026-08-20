import type { Meta, StoryObj } from '@storybook/react';
import { Container1 } from './Container1';

const meta: Meta<typeof Container1> = {
  title: "Components/Container 1",
  component: Container1,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Container 1`\n- **Figma Node ID**: `137:1604`\n- **Category**: `CONTAINER`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container1>;

export const Default: Story = {};
