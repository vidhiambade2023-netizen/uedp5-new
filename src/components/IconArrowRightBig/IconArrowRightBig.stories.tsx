import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowRightBig } from './IconArrowRightBig';

const meta: Meta<typeof IconArrowRightBig> = {
  title: "Components/Icon Arrow Right Big",
  component: IconArrowRightBig,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Arrow Right Big`\n- **Figma Node ID**: `137:1623`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconArrowRightBig>;

export const Default: Story = {};
