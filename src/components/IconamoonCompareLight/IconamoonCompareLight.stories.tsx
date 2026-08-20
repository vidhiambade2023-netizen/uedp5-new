import type { Meta, StoryObj } from '@storybook/react';
import { IconamoonCompareLight } from './IconamoonCompareLight';

const meta: Meta<typeof IconamoonCompareLight> = {
  title: "Components/Iconamoon Compare Light",
  component: IconamoonCompareLight,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Iconamoon Compare Light`\n- **Figma Node ID**: `137:1642`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconamoonCompareLight>;

export const Default: Story = {};
