import type { Meta, StoryObj } from '@storybook/react';
import { IconProfile } from './IconProfile';

const meta: Meta<typeof IconProfile> = {
  title: "Components/Icon Profile",
  component: IconProfile,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Profile`\n- **Figma Node ID**: `137:1632`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconProfile>;

export const Default: Story = {};
