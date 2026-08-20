import type { Meta, StoryObj } from '@storybook/react';
import { Group280 } from './Group280';

const meta: Meta<typeof Group280> = {
  title: "Components/Group 280",
  component: Group280,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Group 280`\n- **Figma Node ID**: `137:1611`\n- **Category**: `CONTAINER`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Group280>;

export const Default: Story = {};
