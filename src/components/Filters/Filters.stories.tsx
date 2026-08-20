import type { Meta, StoryObj } from '@storybook/react';
import { Filters } from './Filters';

const meta: Meta<typeof Filters> = {
  title: "Components/Filters",
  component: Filters,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Filters`\n- **Figma Node ID**: `42:2780`\n- **Category**: `FILTERS`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const Default: Story = {};
