import React from "react";
import "timelinejs3/compiled/css/timeline.css";

let url = "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?";
//let source = "1N1gcaOfd0AUy3iyYPlZZHDyk9n8BXtXRuUMEAR2oSk4";
let lang = "en";
let initial_zoom = 2;
let font = "Default";

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      source: props.source,
      initial_zoom: props.zoom
    };
  }

  componentDidMount() {}

  render() {
    let timelineUrl = url;
    timelineUrl += "source=" + this.state.source;
    timelineUrl += "&lang=" + lang;
    timelineUrl += "&font=" + font;
    timelineUrl += "&initial_zoom=" + this.state.initial_zoom;
    timelineUrl += "&height=" + this.state.height;

    return (
      <div className="TimeLine">
        <iframe
          src={timelineUrl}
          width="100%"
          height={this.state.height}
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          frameborder="0"
        />
      </div>
    );
  }
}
