import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/header";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react"; // To get Chakra CSS / Styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />

      <App />
    </ChakraProvider>
  </React.StrictMode>
);
