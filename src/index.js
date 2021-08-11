import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Theme from "./Theme";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Theme>
                <App />
            </Theme>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
