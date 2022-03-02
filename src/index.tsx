import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import reduxThunk from "redux-thunk";
import App from "./App";
import "./index.css";
import rootReducers from "./reducers";
import * as serviceWorker from "./serviceWorker";

const store: Store = createStore(
    rootReducers,
    applyMiddleware(reduxThunk),
);

const element = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(element, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
