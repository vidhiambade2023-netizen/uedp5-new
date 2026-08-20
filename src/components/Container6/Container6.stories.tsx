import type { Meta, StoryObj } from '@storybook/react';
import { Container6 } from './Container6';

const meta: Meta<typeof Container6> = {
  title: "Components/Container 6",
  component: Container6,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Container 6`\n- **Figma Node ID**: `137:1613`\n- **Category**: `CONTAINER`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container6>;

export const Default: Story = {};
