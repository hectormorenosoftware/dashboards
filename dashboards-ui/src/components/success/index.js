import React from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";

function Success() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./checked-done.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div style={{ textAlign: "center" }}>
        <Lottie
          options={defaultOptions}
          height={350}
          width={350}
          isStopped={false}
          isPaused={false}
        />
      </div>
    )
  }

export default withRouter(Success);
