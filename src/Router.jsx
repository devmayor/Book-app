import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { OnBoarding, Auth, Books, Review } from "./pages";

export class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" initial component={OnBoarding} />
          <Route exact path="/:auth(login|register)" component={Auth} />
          <Route exact path="/books/:id?" component={Books} />
          <Route exact path="/review" component={Review} />
        </Switch>
      </BrowserRouter>
    );
  }
}
