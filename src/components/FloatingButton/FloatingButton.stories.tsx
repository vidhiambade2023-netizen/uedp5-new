import type { Meta, StoryObj } from '@storybook/react';
import { FloatingButton } from './FloatingButton';

const meta: Meta<typeof FloatingButton> = {
  title: "Components/Floating Button",
  component: FloatingButton,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Floating Button`\n- **Figma Node ID**: `137:1614`\n- **Category**: `FAB`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {};
