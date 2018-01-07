import React from "react";
import Thumbnail from "./Thumbnail";
import "../styles/Work.css";

const Work = () => (
  <div className="work">
    <div className="rowOne">
      <Thumbnail title="title of project" src={require("../images/burger.png")}/>
      <Thumbnail title="title of project" src="http://via.placeholder.com/200x200"/>
      <Thumbnail title="title of project" src="http://via.placeholder.com/200x200"/>
    </div>
    <div className="rowTwo">
      <Thumbnail title="title of project" src="http://via.placeholder.com/200x200"/>
      <Thumbnail title="title of project" src="http://via.placeholder.com/200x200"/>
      <Thumbnail title="title of project" src="http://via.placeholder.com/200x200"/>
    </div>
  </div>
);

export default Work;