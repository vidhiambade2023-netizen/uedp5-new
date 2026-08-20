import type { Meta, StoryObj } from '@storybook/react';
import { Button2 } from './Button2';

const meta: Meta<typeof Button2> = {
  title: "Components/Button 2",
  component: Button2,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Button 2`\n- **Figma Node ID**: `137:1602`\n- **Category**: `BUTTON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button2>;

export const Default: Story = {};
