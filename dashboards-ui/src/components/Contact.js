import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Contact extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="Hero">
          <div
            className="HeroGroup"
            style={{ height: "50rem", paddingTop: "50px" }}
          >
            <button className="go-back" onClick={this.goBack}>
              {" "}
              B
            </button>
            <h1>
              You can call us or text us at 619-490-4994 if you need any help.
              You can email us at dashboards@gmail.com
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Contact));
