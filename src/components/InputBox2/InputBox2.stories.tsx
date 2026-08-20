import type { Meta, StoryObj } from '@storybook/react';
import { InputBox2 } from './InputBox2';

const meta: Meta<typeof InputBox2> = {
  title: "Components/Input Box 2",
  component: InputBox2,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Input Box 2`\n- **Figma Node ID**: `137:1615`\n- **Category**: `INPUT`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBox2>;

export const Default: Story = {};
