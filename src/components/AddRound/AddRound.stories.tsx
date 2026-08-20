import type { Meta, StoryObj } from '@storybook/react';
import { AddRound } from './AddRound';

const meta: Meta<typeof AddRound> = {
  title: "Components/Add Round",
  component: AddRound,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Add Round`\n- **Figma Node ID**: `137:1641`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddRound>;

export const Default: Story = {};
