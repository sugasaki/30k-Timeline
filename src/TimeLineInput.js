import React from "react";
import { Button, AnchorButton, InputGroup, Icon } from "@blueprintjs/core";
import { Input, Select } from "antd";
import TimeLine from "./TimeLine";

const style = {
  width: 1000
};

export default class BirthdateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLineSource: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const timeLineSource = event.target.value;
    console.log("input url", timeLineSource);
    this.setState({
      timeLineSource
    });
  }

  doneClick() {
    console.log("timeLineSource", this.state.timeLineSource);
    if (!this.state.timeLineSource) return;
    this.props.onSubmit(this.state.timeLineSource);
  }

  previewClick() {
    console.log("click");
    console.log("previewTimeLineSource", this.state.previewTimeLineSource);
    this.setState({
      previewTimeLineSource: this.state.timeLineSource
    });
  }

  render() {
    return (
      <div className="birthdayInput">
        <h1>TimeLine</h1>
        <AnchorButton
          href="https://docs.google.com/spreadsheets/d/1pHBvXN7nmGkiG8uQSUB82eNlnL8xHu6kydzH_-eguHQ/copy"
          icon="add"
          rightIcon="share"
          target="_blank"
          text="Get the Google Spreadsheet Template"
        />
        <div style={{ marginBottom: 16 }}>
          <h4>Please input for Google Spreadsheet URL</h4>

          <Input
            style={style}
            addonBefore="https://docs.google.com/spreadsheets/d/"
            addonAfter="/edit#gid=0 "
            placeholder="1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk"
            onChange={this.handleChange}
          />
        </div>
        <Button
          rightIcon="arrow-down"
          intent="warning"
          text="Preview"
          onClick={() => this.previewClick()}
        />
        <Button
          rightIcon="arrow-right"
          intent="success"
          text="Done"
          onClick={() => this.doneClick()}
        />

        {this.state.previewTimeLineSource && (
          <TimeLine
            source={this.state.previewTimeLineSource}
            height="250"
            zoom="2"
          />
        )}

        <div className="">
          <p>
            <a href="https://timeline.knightlab.com/#make" target="_blank">
              more help
            </a>
          </p>
        </div>
      </div>
    );
  }
}
