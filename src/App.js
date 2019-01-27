/*global chrome*/
import React, { Component } from "react";
import Footer from "./Footer";
import "./styles/App.css";
import Dashboard from "./Dashboard";
import BirthdateInput from "./BirthdateInput";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import TimeLine from "./TimeLine";
import TimeLineInput from "./TimeLineInput";
import { Button, Icon } from "@blueprintjs/core";
import { Row, Col } from "antd";

let height = "450";
let zoom = 2;

// This is a custom theme to overrid ethe primary color of the material UI library
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3"
    }
  }
});

const style = {
  width: 500
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: undefined
    };
    this.setBirthday = this.setBirthday.bind(this);
    this.storeBirthday = this.storeBirthday.bind(this);
  }
  setBirthday(birthdayString) {
    const birthDate = new Date(birthdayString);
    this.storeBirthday(birthdayString);
    this.setState({
      birthDate
    });
  }

  storeBirthday(value) {
    if (chrome.storage) {
      chrome.storage.local.set({ birthdayString: value }, function() {});
    }
  }

  storeTimeLineSource(value) {
    if (chrome.storage) {
      chrome.storage.local.set({ timeLineSource: value }, function() {});
    }
  }

  setTimeLineSource(timeLineSource) {
    //  console.log("timeLineSource", timeLineSource);
    //  console.log("this", this);
    this.storeTimeLineSource(timeLineSource);

    this.setState({
      timeLineSource
    });
  }

  clearBirthDate() {
    this.storeBirthday("");
    this.setState({
      birthDate: ""
    });
  }
  clearTimelineSource() {
    this.storeTimeLineSource("");
    this.setState({
      timeLineSource: ""
    });
  }
  componentDidMount() {
    // Try to load the birthdate from storage
    if (chrome.storage) {
      chrome.storage.local.get(
        ["birthdayString", "timeLineSource"],
        function(result) {
          //console.log(result);
          if (result.birthdayString) {
            this.setState({
              birthDate: new Date(result.birthdayString)
            });
          }
          if (result.timeLineSource) {
            this.setState({
              timeLineSource: result.timeLineSource
            });
          }
        }.bind(this)
      );
    }
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          {this.state.birthDate && (
            <Dashboard birthDate={this.state.birthDate} />
          )}
          {!this.state.birthDate && (
            <BirthdateInput onSubmit={this.setBirthday} />
          )}
          {this.state.timeLineSource && (
            <TimeLine
              source={this.state.timeLineSource}
              height={height}
              zoom={zoom}
            />
          )}
          {!this.state.timeLineSource && (
            <TimeLineInput onSubmit={e => this.setTimeLineSource(e)} />
          )}

          <Row style={style}>
            <Col span={12}>
              {" "}
              <Button
                rightIcon="clean"
                intent="warning"
                text="clear BirthDate"
                minimal="true"
                onClick={() => this.clearBirthDate()}
              />
            </Col>
            <Col span={12}>
              {" "}
              <Button
                rightIcon="clean"
                intent="warning"
                text="clear Timeline"
                minimal="true"
                onClick={() => this.clearTimelineSource()}
              />
            </Col>
          </Row>
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
