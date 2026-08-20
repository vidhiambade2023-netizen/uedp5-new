import type { Meta, StoryObj } from '@storybook/react';
import { IconReorder } from './IconReorder';

const meta: Meta<typeof IconReorder> = {
  title: "Components/Icon Reorder",
  component: IconReorder,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Reorder`\n- **Figma Node ID**: `137:1625`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconReorder>;

export const Default: Story = {};
