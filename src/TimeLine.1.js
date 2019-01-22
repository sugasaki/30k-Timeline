import React from "react";
import "timelinejs3/compiled/css/timeline.css";
//import "timelinejs3/compiled/js/timeline.js";

let googleUrl = "";

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    //let timeline = new TL.Timeline("timeline-embed", googleUrl);

    this.state = {
      birthday: ""
    };
  }

  render() {
    return (
      <div className="TimeLine">
        /*
        <iframe
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1N1gcaOfd0AUy3iyYPlZZHDyk9n8BXtXRuUMEAR2oSk4&font=Default&lang=en&initial_zoom=2&height=650"
          width="100%"
          height="650"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          frameborder="0"
        />
        */
        <br />
      </div>
    );
  }
}
