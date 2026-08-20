import type { Meta, StoryObj } from '@storybook/react';
import { Map } from './Map';

const meta: Meta<typeof Map> = {
  title: "Components/Map",
  component: Map,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Map`\n- **Figma Node ID**: `42:2784`\n- **Category**: `MAP`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {};
