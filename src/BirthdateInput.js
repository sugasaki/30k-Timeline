import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Utils from "./utils";
import {
  DateInput,
  IDateFormatProps,
  TimePrecision
} from "@blueprintjs/datetime";
import { Classes, H5, Switch } from "@blueprintjs/core";
import { DatePicker } from "@blueprintjs/datetime";
import moment from "moment";

export default class BirthdateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isValidDate = this.isValidDate.bind(this);
  }

  handleChange(event) {
    const birthday = event.target.value;
    this.setState({
      birthday
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.birthday);
  }

  isValidDate(dateString) {
    return Utils.isValidBirthDate(dateString);
  }

  handleChange(date) {
    let birthDate = moment(date).format("YYYY-MM-DD");
    console.log("date", birthDate);

    this.setState({ birthday: birthDate });
  }

  render() {
    return (
      <div className="birthdayInput">
        <h1>When were you born?</h1>

        <DatePicker
          onChange={newDate => this.handleChange(newDate)}
          minDate={new Date("1900/1/1")}
          defaultValue={new Date("1980/1/1")}
        />

        <h1>{this.state.birthday}</h1>

        <div>
          {this.isValidDate(this.state.birthday) && (
            <Button
              onClick={this.handleSubmit}
              variant="contained"
              size="large"
              type="submit"
              color="primary"
            >
              Done
            </Button>
          )}
        </div>
      </div>
    );
  }
}
