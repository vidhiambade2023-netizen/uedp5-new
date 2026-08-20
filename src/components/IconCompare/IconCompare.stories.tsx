import type { Meta, StoryObj } from '@storybook/react';
import { IconCompare } from './IconCompare';

const meta: Meta<typeof IconCompare> = {
  title: "Components/Icon Compare",
  component: IconCompare,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Compare`\n- **Figma Node ID**: `137:1627`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconCompare>;

export const Default: Story = {};
