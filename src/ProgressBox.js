import React from "react";
import PropTypes from "prop-types";
import "./styles/index.css";

const Filler = props => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default function ProgressBox(props) {
  return (
    <input
      className="progress-box"
      maxlength="2048"
      name="q"
      type="text"
      title="search"
      value=""
      aria-label="search"
    />
  );
}

ProgressBox.propTypes = {
  percent: PropTypes.number.isRequired
};
