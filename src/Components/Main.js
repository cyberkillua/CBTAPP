import React, { Component } from "react";
import Landingpage from "./Landingpage";
import StartPage from "./StartPage";
import {Switch,  Route } from "react-router-dom";
import QuestionPage from "./Questionpage";

class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <Switch>
        {/* <Route exact path="/" render={() => <Landingpage />} /> */}

        <Route exact path="/" render={() => <StartPage />} />
        <Route
          path="/Questionpage"
          render={() => <QuestionPage Questions={this.props.Questions} />}
        />
      </Switch>
    );
  }
}

export default Main;
