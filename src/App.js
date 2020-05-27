import React from "react";
import HomePage from "./pages/home-page.component";
import FormPage from "./pages/form-page.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/forms" component={FormPage} />
    </Switch>
  );
}
export default App;
