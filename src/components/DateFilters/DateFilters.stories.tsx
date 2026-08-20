import type { Meta, StoryObj } from '@storybook/react';
import { DateFilters } from './DateFilters';

const meta: Meta<typeof DateFilters> = {
  title: "Components/Date filters",
  component: DateFilters,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Date filters`\n- **Figma Node ID**: `42:2782`\n- **Category**: `DATE_FILTERS`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateFilters>;

export const Default: Story = {};
