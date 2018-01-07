import React from "react";
import "../styles/Intro.css";

const Intro = () => (
  <div className="intro">

      <div className="firstLine"><p className="one">Hi!</p> <p className="one2">My</p> <p className="one3">name</p> <p className="one4">is</p></div>
      <div className="name">
        <img src={require("../images/Letterc.png")} alt=""/><p className="one5">laire.</p></div>
      <div className="secondLine"><p className="two">I'm</p> <p className="two2">a</p> <p className="two3">web</p> <p className="two4">developer</p> <p className="two5">with</p> <p className="two6">a</p> <p className="two7">passion</p> <p className="two8">for</p> <p className="two9">creativity</p> <p className="two10">and</p> <p className="two11">innovation.</p></div>
      <p className="thirdLine">Currently based in Boston, MA.</p>

  </div>
);

export default Intro;