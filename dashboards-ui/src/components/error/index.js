import React from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: require("./error-animation.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

class Error extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Lottie
          options={defaultOptions}
          height={10}
          width={10}
          isStopped={false}
          isPaused={false}
        />
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Error));
