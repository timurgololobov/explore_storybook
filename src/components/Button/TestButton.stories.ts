import type { Meta, StoryObj } from "@storybook/react";

import { TestButton } from "./TestButton";

const meta = {
  title: "New/TestButton",
  component: TestButton,
  // parameters: {},
  // argTypes: {},
} satisfies Meta<typeof TestButton>;

export default meta;
type Story = StoryObj<typeof TestButton>;

export const Primary: Story = {
  args: {
    label: "TestButton",
  },
};
