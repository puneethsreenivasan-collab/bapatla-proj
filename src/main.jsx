import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>,
);
