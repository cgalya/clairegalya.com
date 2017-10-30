import React from "react";
import "../styles/Thumbnail.css";

const Thumbnail = (props) => (
  <div className="thumbnail">
    <img src={props.src} alt=""/>
    <p>{props.title}</p>
  </div>
);

export default Thumbnail;