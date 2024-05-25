import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Success from "./success";

class ConfirmationPage extends React.PureComponent {
  routeToMainMenu = () => {
    this.props.history.push("/demo");
  };

  render() {
    const { titleColor, businessType, titleNumber } = this.props;
    return (
      <div>
        <h2 style={{ textAlign: "center", color: titleColor }}>
          {businessType === "sales"
            ? "Your order has been placed!"
            : "Your meeting has been scheduled"}{" "}
        </h2>
        <h4
          className="phone-number phone-text-size"
          style={{ color: titleColor }}
        >
          You can call us at {titleNumber}
        </h4>

        <div className="flexbox-four">
          <button className="go-back" onClick={this.routeToMainMenu}>
            {" "}
            Go Back
          </button>
        </div>
        <Success />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    titleColor: state.editorReducerDemo.titleColor,
    titleNumber: state.editorReducerDemo.titleNumber,
    businessType: state.editorReducerDemo.businessType,
  };
}

export default withRouter(connect(mapStateToProps, null)(ConfirmationPage));
