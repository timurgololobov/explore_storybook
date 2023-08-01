import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AccordionChakra } from "./accordion/Accordion";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AccordionChakra />
    </ChakraProvider>
  );
}

export default App;
