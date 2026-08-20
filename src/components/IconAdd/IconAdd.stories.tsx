import type { Meta, StoryObj } from '@storybook/react';
import { IconAdd } from './IconAdd';

const meta: Meta<typeof IconAdd> = {
  title: "Components/Icon Add",
  component: IconAdd,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Add`\n- **Figma Node ID**: `137:1624`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconAdd>;

export const Default: Story = {};
