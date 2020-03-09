import React from "react";
import "./App.css";
import Header from "./Header";
import Collections from "./Collections";
import { Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Collections} />
      </Switch>
    </div>
  );
}

export default App;
