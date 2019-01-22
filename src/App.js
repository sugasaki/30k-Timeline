/*global chrome*/
import React, { Component } from "react";
import Footer from "./Footer";
import "./styles/App.css";
import Dashboard from "./Dashboard";
import BirthdateInput from "./BirthdateInput";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import TimeLine from "./TimeLine";

let source = "1N1gcaOfd0AUy3iyYPlZZHDyk9n8BXtXRuUMEAR2oSk4";
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
  storeBirthday(birthdayString) {
    const birthDate = birthdayString;
    //chrome.storage.local.set({ key: birthDate }, function() {});
  }
  componentDidMount() {
    // Try to load the birthdate from storage
    /*
    chrome.storage.local.get(
      ["key"],
      function(result) {
        if (result.key) {
          this.setState({
            birthDate: new Date(result.key)
          });
        }
      }.bind(this)
    );
    */
    this.setState({
      birthDate: new Date("1973/7/13")
    });
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
          <TimeLine source={source} height={height} zoom={zoom} />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
