import React, { Suspense, lazy } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import * as RouteConstants from "../../constants/RouteConstants";

import LoadingIndicator from "../LoadingIndicator";

const TodosRoute = lazy(() => import("../../routes/TodosRoute"));

const App = props => {
  return (
    <ConnectedRouter history={props.history}>
      <Suspense fallback={<LoadingIndicator />}>
        <Switch>
          <Route
            exact={true}
            path={RouteConstants.TODOS_ROUTE}
            component={TodosRoute}
          />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
};

export default App;
