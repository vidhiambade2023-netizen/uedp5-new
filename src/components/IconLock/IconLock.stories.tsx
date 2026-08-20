import type { Meta, StoryObj } from '@storybook/react';
import { IconLock } from './IconLock';

const meta: Meta<typeof IconLock> = {
  title: "Components/Icon Lock",
  component: IconLock,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Lock`\n- **Figma Node ID**: `137:1630`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconLock>;

export const Default: Story = {};
