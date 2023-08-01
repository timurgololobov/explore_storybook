// import { theme } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
const theme = require("../src/theme");

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme,
    },
  },
};

export default preview;
