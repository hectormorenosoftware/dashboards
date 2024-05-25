import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Billing extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/demo");
  };
  render() {
    const { dateExpiration, datePurchase, datesLeft } = this.props;
    return (
      <div>
        <div className="Hero">
          <div className="HeroGroupBilling">
            <button className="go-back" onClick={this.goBack}>
              {" "}
              Go Back
            </button>
            <h1>
              You will be able to renew your subscription when you have 7 days
              left.
            </h1>
            <h1 style={{ marginTop: "2rem" }}>
              Expiration Date: {dateExpiration}
            </h1>
            <h1>Purchase Date: {datePurchase}</h1>

            <h1>Dates Left: {datesLeft}</h1>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dateExpiration: state.editorReducerDemo.dateExpiration,
    datePurchase: state.editorReducerDemo.datePurchase,
    datesLeft: state.editorReducerDemo.datesLeft,
  };
}

export default withRouter(connect(mapStateToProps, null)(Billing));
