import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "./context/userContext";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr", "cn"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

ReactDOM.render(
  // <Suspense>
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  // </Suspense> ,
  document.getElementById("root")
);
