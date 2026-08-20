import type { Meta, StoryObj } from '@storybook/react';
import { IconAdd5 } from './IconAdd5';

const meta: Meta<typeof IconAdd5> = {
  title: "Components/Icon Add 5",
  component: IconAdd5,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Add 5`\n- **Figma Node ID**: `137:1640`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconAdd5>;

export const Default: Story = {};
