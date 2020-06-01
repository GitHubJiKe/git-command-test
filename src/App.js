import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export default () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
