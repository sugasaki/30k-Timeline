import React from "react";
import ProgressBox from "./ProgressBox";
import Utils from "./utils";
import commaNumber from "comma-number";
import PropTypes from "prop-types";
import moment from "moment";
import { Progress } from "antd";

const numDaysLeft = function(birthDate) {
  return Utils.daysLeft(birthDate);
};

const daysOldFormat = function(birthDate) {
  //  return commaNumber(Utils.daysOld(birthDate));
  let birth = moment(birthDate);
  let days = moment().diff(birth, "days");
  return days;
  //console.log(days);
};

const daysLeftFormat = function(birthDate) {
  return commaNumber(numDaysLeft(birthDate));
};

const DaysLeftView = function(props) {
  let birth = moment(props.birthDate);
  let years = moment().diff(birth, "years");
  let days = moment().diff(birth, "days");
  let leftDays = 30000 - days;
  let gage = Math.round((days / 30000) * 100); //percentage

  //console.log(years);
  //console.log(days);

  return (
    <div className="dashboard">
      <div className="banner">
        <a
          href="http://news.mit.edu/2013/commencement-address-houston-0607"
          target="_blank"
        >
          There are 30,000 days in your life.
        </a>
      </div>
      <div className="banner2">
        <p>
          You have lived <strong>{commaNumber(days)}</strong>
        </p>

        <div className="container">
          <ProgressBox percent={gage} />
        </div>
      </div>

      <div className="banner2">
        <p>
          You have <strong>{commaNumber(leftDays)}</strong> days left
        </p>

        <div className="container">
          <Progress type="dashboard" percent={gage} />
        </div>
      </div>

      <div>
        <p>
          <strong>{years}</strong> / 80 years
        </p>
        <strong>
          <a
            href="https://www.youtube.com/watch?v=6inri5ggyK4&feature=youtu.be"
            target="_blank"
          >
            There are no warm-ups, no practice rounds, no reset buttons.
          </a>
        </strong>
      </div>
    </div>
  );
};

const NoDaysLeftView = function(props) {
  return (
    <div className="dashboard dashboard-img">
      <div className="banner">
        <p>
          You have lived <strong>{daysOldFormat(props.birthDate)}</strong> days
        </p>
      </div>

      <p>You may have passed the 30k mark, but life is still capped.</p>
      <img src={"./hourglass.gif"} width={300} height={300} />
      <strong>So make the most of it.</strong>
    </div>
  );
};

export default function Dashboard(props) {
  return numDaysLeft(props.birthDate) > 0 ? (
    <DaysLeftView birthDate={props.birthDate} />
  ) : (
    <NoDaysLeftView birthDate={props.birthDate} />
  );
}

Dashboard.propTypes = {
  birthDate: PropTypes.object.isRequired
};
