import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ForgotPassword extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="Hero">
          <div className="HeroGroupForgotten">
            <button className="go-back" onClick={this.goBack}>
              {" "}
              Go Back
            </button>

            <h1>
              You can text or call 202-235-3025 if you can't log in, please be
              patient, if you can't get a hold of someone just text us we will
              get back to you in less than 1 hour.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(ForgotPassword));
