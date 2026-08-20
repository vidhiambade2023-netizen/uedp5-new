import type { Meta, StoryObj } from '@storybook/react';
import { Container2 } from './Container2';

const meta: Meta<typeof Container2> = {
  title: "Components/Container 2",
  component: Container2,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Container 2`\n- **Figma Node ID**: `137:1605`\n- **Category**: `CONTAINER`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container2>;

export const Default: Story = {};
