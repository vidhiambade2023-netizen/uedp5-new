import type { Meta, StoryObj } from '@storybook/react';
import { IconShare } from './IconShare';

const meta: Meta<typeof IconShare> = {
  title: "Components/Icon Share",
  component: IconShare,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Share`\n- **Figma Node ID**: `137:1629`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconShare>;

export const Default: Story = {};
