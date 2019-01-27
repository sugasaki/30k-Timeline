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
    let birthDate = moment(date);
    console.log("date", birthDate);

    this.setState({ birthday: birthDate });
  }

  render() {
    return (
      <div className="birthdayInput">
        <h1>When were you born?</h1>

        <DatePicker onChange={newDate => this.handleChange(newDate)} />

        <h1>{this.state.selectedDate}</h1>

        <form onSubmit={this.handleSubmit}>
          <FormControl variant="outlined">
            <div className="formInput">
              <div>
                <TextField
                  id="date"
                  variant="outlined"
                  label="Birth Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={this.handleChange}
                  value={this.state.birthday}
                />
              </div>
              <div>
                {this.isValidDate(this.state.birthday) && (
                  <Button
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
          </FormControl>
        </form>
      </div>
    );
  }
}
