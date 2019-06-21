import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/styles.scss";

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
