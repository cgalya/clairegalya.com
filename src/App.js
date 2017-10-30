import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <Work />
        <About />
      </div>
    );
  }
}

export default App;
