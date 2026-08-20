import type { Meta, StoryObj } from '@storybook/react';
import { TopBar } from './TopBar';

const meta: Meta<typeof TopBar> = {
  title: "Components/Top Bar",
  component: TopBar,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Top Bar`\n- **Figma Node ID**: `137:1616`\n- **Category**: `TOP_BAR`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {};
