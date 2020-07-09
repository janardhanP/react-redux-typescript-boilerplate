import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import rootStore from "./Common/stores/rootStore";
import App from "./Common/components/App";

(async window => {
  const initialState = {};
  const history = createBrowserHistory();
  const store = rootStore(initialState, history);

  const rootEl = document.getElementById("root");
  const render = (Component: any, el: any) => {
    ReactDOM.render(
      <Provider store={store}>
        <Component history={history} dispatch={store.dispatch} />
      </Provider>,
      el
    );
  };

  render(App, rootEl);
})(window);
