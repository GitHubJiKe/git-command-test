import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Hooks from "./hooks";
// import work from "./work";

const App = () => {
  Hooks.useListeningRouteChange();

  return (
    <>
      <h1>Appssss</h1>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
      </Switch>
    </>
  );
};



export default () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <App />
        <Footer />
      </Router>
    </div>
  );
};
