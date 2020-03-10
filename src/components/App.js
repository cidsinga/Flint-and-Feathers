import React from "react";
import "./App.css";
import Header from "./Header";
import Collections from "./Collections";
import About from "./About";
import Footer from "./Footer";
import { Switch, Route, Router } from "react-router-dom";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Collections} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
