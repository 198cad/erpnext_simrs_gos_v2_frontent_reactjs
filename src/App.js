import "fontsource-roboto";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/private/Home";
import SignInSide from "./SignInSide";

const App = () => {
  let authentication = true;
  let authorization = true;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {authentication && authorization ? <Home /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
        <Route path="/login">
          {authentication && authorization ? <Redirect to={{ pathname: "/" }} /> : <SignInSide />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
