import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Intro}/>
          <Route exact path="/work" component={Work}/>
          <Route exact path="/about" component={About}/>
          {/*<Route exact path="/contact" component={Contact} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
