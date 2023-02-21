import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { theme } from "@configs/theme";
import React from "react";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
