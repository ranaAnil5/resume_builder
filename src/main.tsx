import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import AppContextProvider from "./Context/AppContextProvider.tsx";

const defScheme = {
  defaultProps: {
    colorScheme: "teal",
  },
};

const theme = extendTheme({
  components: {
    Button: defScheme,
    Radio: defScheme,
    Switch: defScheme,
    Stepper: defScheme,
  },
  colors: {
    brand: {
      100: "#b2d8d8",
      300: "#66b2b2",
      500: "#008080",
      700: "#006666",
      900: "#004c4c",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
