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
      title="検索"
      value=""
      aria-label="検索"
    />
  );
}

ProgressBox.propTypes = {
  percent: PropTypes.number.isRequired
};
