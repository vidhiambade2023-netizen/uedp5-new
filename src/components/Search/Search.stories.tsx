import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

const meta: Meta<typeof Search> = {
  title: "Components/Search",
  component: Search,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Search`\n- **Figma Node ID**: `137:1633`\n- **Category**: `SEARCH`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {};
