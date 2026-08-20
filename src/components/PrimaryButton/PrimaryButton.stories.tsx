import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: "Components/Primary Button",
  component: PrimaryButton,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Primary Button`\n- **Figma Node ID**: `137:1608`\n- **Category**: `BUTTON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {};
