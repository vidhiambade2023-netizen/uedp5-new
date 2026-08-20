import type { Meta, StoryObj } from '@storybook/react';
import { Zones } from './Zones';

const meta: Meta<typeof Zones> = {
  title: "Components/Zones",
  component: Zones,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Zones`\n- **Figma Node ID**: `42:2783`\n- **Category**: `ZONES`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Zones>;

export const Default: Story = {};
