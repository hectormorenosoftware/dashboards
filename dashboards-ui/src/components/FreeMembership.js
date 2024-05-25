import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class FreeMembership extends React.PureComponent {
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
              You can text 202-235-3025 to get a free 4 month membership, no
              debit card or credit card required. Just text us your email,
              password of choice, and username of choice.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(FreeMembership));
