import type { Meta, StoryObj } from '@storybook/react';
import { IconMessage } from './IconMessage';

const meta: Meta<typeof IconMessage> = {
  title: "Components/Icon Message",
  component: IconMessage,
  parameters: {
    docs: {
      description: {
        component: "### Figma Layer Specification\n\n- **Figma Layer Name**: `Icon Message`\n- **Figma Node ID**: `137:1631`\n- **Category**: `ICON`\n- **Bound Design Tokens**: Synchronized with `figma-tokens.css` variables.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconMessage>;

export const Default: Story = {};
