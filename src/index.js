import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./provider/RtlProvider";
import AppLayout from "layout/AppLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RtlProvider>
        <AppLayout>
          <App />
        </AppLayout>
      </RtlProvider>
    </ChakraProvider>
  </React.StrictMode>
);
