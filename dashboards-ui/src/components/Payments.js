import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Payments extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="Hero">
          <div className="HeroGroupPayments">
            <button className="go-back" onClick={this.goBack}>
              {" "}
              Go Back
            </button>
            <h1>
              To receive payments we recommend you to use Cash App by Square, we
              do not process payments(We only process payments for you to buy or
              renew your subscription through Stripe). The reason we recommend
              Cash App by Square is because <br />
              it's low cost and you can receive your money instantly(same day)
              for a 1% fee directly to your debit card(Note: Cash App by Square
              is not FDIC insured, however, our developers have been successful
              at paying friends, using cash app's debit card, and cashing out to
              debit cards in an instant).
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Payments));
