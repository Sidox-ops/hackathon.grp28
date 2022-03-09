import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "./context/userContext";
import { I18nextProvider } from "react-i18next";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    fr: {
      common: common_fr,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <UserContextProvider>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </UserContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
