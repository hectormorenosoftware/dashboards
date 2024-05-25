import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Error from "./error";

class ErrorPage extends React.PureComponent {
  componentDidMount() {
    let time = () =>
      setTimeout(() => {
        this.props.history.push("/");
      }, 5000);

    time();
    clearTimeout(time);
  }
  render() {
    return (
      <div className="Hero">
        <div className="HeroGroupError">
          <h2 style={{ textAlign: "center", color: "white" }}>
            Your payment was declined, please check your payment method and try
            again.
          </h2>
          <Error />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(ErrorPage));
