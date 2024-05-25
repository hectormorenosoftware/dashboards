import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Success from "./success";

class ProcessingSuccess extends React.PureComponent {
  render() {
    return (
      <div className="Hero">
        <div className="HeroGroupSuccess">
          <h2 style={{ textAlign: "center", color: "white" }}>
            Your payment was successfuly processed, you will be redirected to
            your dashboard.
          </h2>
          <Success />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(ProcessingSuccess));
