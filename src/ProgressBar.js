import React from "react";
import PropTypes from "prop-types";
import "./styles/index.css";

const Filler = props => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default function ProgressBar(props) {
  //console.log("props", props);
  return (
    <div className="progress-bar">
      <Filler percentage={props.percent} />
    </div>
  );
}

ProgressBar.propTypes = {
  birthDateObject: PropTypes.object.isRequired
};
