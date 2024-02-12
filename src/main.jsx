import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./styles/index.css";
import { ProviderGetCountryDB } from "./context/ContextGetCountryDB.jsx";
import { ProviderGetCountryAPI } from "./context/ContextGetCountryAPI.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderGetCountryAPI>
      <ProviderGetCountryDB>
        <App />
      </ProviderGetCountryDB>
    </ProviderGetCountryAPI>
  </React.StrictMode>
);
