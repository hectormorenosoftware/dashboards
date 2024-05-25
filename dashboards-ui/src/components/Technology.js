import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Technology extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="Hero">
          <div className="HeroGroupTechnology">
            <button className="go-back" onClick={this.goBack}>
              {" "}
              Go Back
            </button>
            <h1>
              Dashboards has regression free payment processors for free made in
              Node JS, Express, and Stripe.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Technology));
