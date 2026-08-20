import type { Meta, StoryObj } from '@storybook/react';
import { IconAdd2 } from './IconAdd2';

const meta: Meta<typeof IconAdd2> = {
  title: "Components/Icon Add 2",
  component: IconAdd2,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Add 2`\n- **Figma Node ID**: `137:1637`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconAdd2>;

export const Default: Story = {};
