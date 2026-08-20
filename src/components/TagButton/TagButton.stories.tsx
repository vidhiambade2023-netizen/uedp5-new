import type { Meta, StoryObj } from '@storybook/react';
import { TagButton } from './TagButton';

const meta: Meta<typeof TagButton> = {
  title: "Components/Tag Button",
  component: TagButton,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Tag Button`\n- **Figma Node ID**: `137:1606`\n- **Category**: `TAG`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagButton>;

export const Default: Story = {};
