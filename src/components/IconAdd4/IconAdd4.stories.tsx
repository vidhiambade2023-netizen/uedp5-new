import type { Meta, StoryObj } from '@storybook/react';
import { IconAdd4 } from './IconAdd4';

const meta: Meta<typeof IconAdd4> = {
  title: "Components/Icon Add 4",
  component: IconAdd4,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Add 4`\n- **Figma Node ID**: `137:1639`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconAdd4>;

export const Default: Story = {};
