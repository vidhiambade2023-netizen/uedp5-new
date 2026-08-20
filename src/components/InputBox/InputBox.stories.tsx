import type { Meta, StoryObj } from '@storybook/react';
import { InputBox } from './InputBox';

const meta: Meta<typeof InputBox> = {
  title: "Components/Input Box",
  component: InputBox,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Input Box`\n- **Figma Node ID**: `137:1600`\n- **Category**: `INPUT`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBox>;

export const Default: Story = {};
