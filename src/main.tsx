import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/global.ts";
import { Providers } from "./context/providers.tsx";
import { MetaPixel } from "./components/metaPixel/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <MetaPixel />
      <App />
    </Providers>
  </React.StrictMode>
);
