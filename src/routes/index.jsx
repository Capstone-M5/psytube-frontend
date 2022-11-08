import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import TopDez from "../pages/top_dez";

function Routes() {
  return (
    <Switch>
      <Route path="/topdez" exact>
        <TopDez />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
