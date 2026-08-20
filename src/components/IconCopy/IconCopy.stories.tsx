import type { Meta, StoryObj } from '@storybook/react';
import { IconCopy } from './IconCopy';

const meta: Meta<typeof IconCopy> = {
  title: "Components/Icon Copy",
  component: IconCopy,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Copy`\n- **Figma Node ID**: `137:1628`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconCopy>;

export const Default: Story = {};
