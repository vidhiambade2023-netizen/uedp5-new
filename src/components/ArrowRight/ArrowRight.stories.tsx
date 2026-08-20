import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from './ArrowRight';

const meta: Meta<typeof ArrowRight> = {
  title: "Components/Arrow Right",
  component: ArrowRight,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Arrow Right`\n- **Figma Node ID**: `137:1634`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArrowRight>;

export const Default: Story = {};
