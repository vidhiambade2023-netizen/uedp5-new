import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryButton } from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
  title: "Components/Secondary Button",
  component: SecondaryButton,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Secondary Button`\n- **Figma Node ID**: `137:1609`\n- **Category**: `BUTTON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {};
