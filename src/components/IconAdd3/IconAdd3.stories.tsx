import type { Meta, StoryObj } from '@storybook/react';
import { IconAdd3 } from './IconAdd3';

const meta: Meta<typeof IconAdd3> = {
  title: "Components/Icon Add 3",
  component: IconAdd3,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Add 3`\n- **Figma Node ID**: `137:1638`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconAdd3>;

export const Default: Story = {};
