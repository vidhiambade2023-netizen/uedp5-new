import type { Meta, StoryObj } from '@storybook/react';
import { Container3 } from './Container3';

const meta: Meta<typeof Container3> = {
  title: "Components/Container 3",
  component: Container3,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Container 3`\n- **Figma Node ID**: `137:1607`\n- **Category**: `CONTAINER`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container3>;

export const Default: Story = {};
