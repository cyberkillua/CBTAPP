import React, { Component } from "react";
import Onequestion from "./Onequestion";

class QuestionPage extends Component {
  render() {
    // console.log(this.props.Questions);
    return (
      <div className="Question">
        {/* <Timer {...this.props}/> */}
        <Onequestion {...this.props} />

        {/* <Nextbutton {...this.props}/> */}
      </div>
    );
  }
}

export default QuestionPage;
