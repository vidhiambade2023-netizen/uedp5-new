import type { Meta, StoryObj } from '@storybook/react';
import { AddRoundDuotone } from './AddRoundDuotone';

const meta: Meta<typeof AddRoundDuotone> = {
  title: "Components/Add Round Duotone",
  component: AddRoundDuotone,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Add Round Duotone`\n- **Figma Node ID**: `137:1635`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddRoundDuotone>;

export const Default: Story = {};
