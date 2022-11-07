import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import TopDez from "../pages/top_dez";
import Login from "../pages/login";
import Register from "../pages/register";

function Routes() {
  return (
    <Switch>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
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
