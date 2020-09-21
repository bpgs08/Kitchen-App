import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../src/pages/home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route
            path="/"
            exact={true}
            component={(props) => <Home {...props} />}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
