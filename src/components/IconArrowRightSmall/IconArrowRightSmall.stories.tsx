import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowRightSmall } from './IconArrowRightSmall';

const meta: Meta<typeof IconArrowRightSmall> = {
  title: "Components/Icon Arrow Right Small",
  component: IconArrowRightSmall,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Arrow Right Small`\n- **Figma Node ID**: `137:1622`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconArrowRightSmall>;

export const Default: Story = {};
