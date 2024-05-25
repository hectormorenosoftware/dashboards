import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Demo extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="Hero">
          <div className="HeroGroup">
            <button className="go-back" onClick={this.goBack}>
              {" "}
              Go back
            </button>
            <h1>Coming soon..</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Demo));
