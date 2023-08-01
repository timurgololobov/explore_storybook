import type { Meta, StoryObj } from "@storybook/react";

import { AccordionChakra } from "./Accordion";

const meta = {
  title: "New/Accordion",
  component: AccordionChakra,
  // parameters: {},
  // argTypes: {},
} satisfies Meta<typeof AccordionChakra>;

export default meta;
type Story = StoryObj<typeof AccordionChakra>;

export const Primary: Story = {
  args: {},
};
