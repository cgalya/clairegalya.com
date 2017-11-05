import React from "react";
import "../styles/Intro.css";

const Intro = () => (
  <div className="intro">
    <div>
      <div className="firstLine"><p className="one">Hi!</p> <p className="one2">My</p> <p className="one3">name</p> <p className="one4">is</p>
        <img src="../images/Letterc.png" alt=""/><p className="one5">Claire.</p></div>
      <div className="secondLine"><p className="two">I'm</p> <p className="two2">a</p> <p className="two3">web</p> <p className="two4">developer</p> <p className="two5">who</p> <p className="two6">likes</p> <p className="two7">to</p> <p className="two8">make</p> <p className="two9">things.</p></div>
      <p className="three">Take a look around and see some of my work.</p>
    </div>
  </div>
);

export default Intro;