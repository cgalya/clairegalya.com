import React from "react";
import Thumbnail from "./Thumbnail";
import "../styles/Work.css";
import Burger from "../images/burger.png";
import Podtalk from "../images/podtalk.png";

const Work = () => (
  <div className="work">
    <div className="rowOne">
      <Thumbnail
        title="Eat Some Burgers"
        src={Burger}
        link="https://shielded-hamlet-86591.herokuapp.com/"
        github="https://github.com/cgalya/Eat-Some-Burgers"
      />
      <Thumbnail
        title="podtalk"
        src={Podtalk}
        link="https://podtalk.herokuapp.com"
        github="https://github.com/cgalya/PodTalk"
      />
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