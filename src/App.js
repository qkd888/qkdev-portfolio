import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/Contact" exact component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
