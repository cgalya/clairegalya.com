import React from "react";
import "../styles/Thumbnail.css";

const Thumbnail = (props) => (
  <div className="thumbnail">
    <img src={props.src} alt=""/>
    <p>{props.title}</p>
    <a href={props.link}>View Project</a>
    <a href={props.github}>Github</a>
  </div>
);

export default Thumbnail;