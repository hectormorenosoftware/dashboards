import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class GetStarted extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  };
  routeToLogin = () => {
    this.props.history.push("/login");
  };
  routeToSignUp = () => {
    this.props.history.push("/signup");
  };
  render() {
    return (
      <div>
        <div className="Hero">
          <div className="HeroGroupGetStarted">
            <div className="flex-box-started-buttons">
              <button className="go-back" onClick={this.goBack}>
                {" "}
                Go Back
              </button>
              <button
                className="go-back"
                style={{ marginTop: "1rem" }}
                onClick={this.routeToSignUp}
              >
                {" "}
                Sign Up
              </button>
              <button
                className="go-back"
                style={{ marginTop: "1rem" }}
                onClick={this.routeToLogin}
              >
                {" "}
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(GetStarted));
