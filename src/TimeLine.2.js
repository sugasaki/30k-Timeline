import React from "react";
//import "timelinejs3/compiled/js/timeline.js";
import "timelinejs3/compiled/css/timeline.css";
//import TL from "./TL";

//import "timelinejs3/compiled/js/timeline";
//import "timelinejs3/compiled/js/timeline-embed";

//import { timeline } from "timelinejs3/compiled/js/timeline.js";

//require("timelinejs3/compiled/js/timeline.js");
//let TL = require("timelinejs3/compiled/js/timeline");

//let googleUrl = "";

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    //let timeline = new TL.Timeline("timeline-embed", googleUrl);

    this.state = {
      birthday: ""
    };
  }

  componentDidMount() {
    //let time = require("timelinejs3/compiled/js/timeline");
    /*
    let timeline = new time.TL.Timeline(
      "timeline-embed",
      "https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml"
    );
    */
  }

  render() {
    let url =
      "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1N1gcaOfd0AUy3iyYPlZZHDyk9n8BXtXRuUMEAR2oSk4&font=Default&lang=en&initial_zoom=2&height=650";

    return (
      <div className="TimeLine">
        <iframe
          src={url}
          width="100%"
          height="650"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          frameborder="0"
        />
      </div>
    );
  }
}
