import React from "react";
import "../styles/Intro.css";
import Jim from '../images/Jim.png';

const Intro = () => (
  <div className="intro">
    <img src={Jim} alt="Jim the Cat"/>
    <div>
      <p>Hi! My name is Claire. I'm a web developer who likes to make things.</p>
      <p>Take a look around and see some things that I've made.</p>
      <p>(P.S. That's my cat, Jim.  He likes to sit in strange places.)</p>
    </div>
  </div>
);

export default Intro;