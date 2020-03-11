import React from "react";
import "./App.css";
import Header from "./Header";
import Collections from "./Collections";
import About from "./About";
import Footer from "./Footer";
import { Switch, Route, Router } from "react-router-dom";
import Gallery from "./Gallery";
import Feathers from "./Feathers";
import Flowers from "./Flowers";
import Fun from "./Fun";
import Scenes from "./Scenes";
import Stones from "./Stones";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Collections} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/feathers" component={Feathers} />
        <Route exact path="/fun" component={Fun} />
        <Route exact path="/scenes" component={Scenes} />
        <Route exact path="/stones" component={Stones} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
