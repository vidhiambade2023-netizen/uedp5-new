import type { Meta, StoryObj } from '@storybook/react';
import { MaterialSymbolsReorderRounded } from './MaterialSymbolsReorderRounded';

const meta: Meta<typeof MaterialSymbolsReorderRounded> = {
  title: "Components/Material Symbols Reorder Rounded",
  component: MaterialSymbolsReorderRounded,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Material Symbols Reorder Rounded`\n- **Figma Node ID**: `137:1626`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MaterialSymbolsReorderRounded>;

export const Default: Story = {};
