import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: "Components/List Item",
  component: ListItem,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `List Item`\n- **Figma Node ID**: `137:1618`\n- **Category**: `LIST_ITEM`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {};
