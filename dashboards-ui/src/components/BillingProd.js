import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { renewSubscription } from "../redux/actions/editorProdActions";

class BillingProd extends React.PureComponent {
  state = {
    disabled: false,
    payment_number: "",
    exp_month: "",
    exp_year: "",
    cvv: "",
  };

  goBack = () => {
    this.props.history.push("/editor");
  };

  changePaymentInfo = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  processPaymentToSignUp = () => {
    const { payment_number, exp_month, exp_year, cvv } = this.state;
    const { renewFunc, email } = this.props;

    const parsedExpMonth = parseInt(exp_month);
    const parsedExpYear = parseInt(exp_year);

    renewFunc(email, {
      payment_number,
      parsedExpMonth,
      parsedExpYear,
      cvv,
      email,
    });
  };

  render() {
    const { dateExpiration, datePurchase, loading } = this.props;
    const { payment_number, exp_month, exp_year, cvv } = this.state;
    const today = new Date();
    const localDate = today.toLocaleDateString();
    const date1 = new Date(dateExpiration);
    const date2 = new Date(localDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (
      <div>
        {loading === false ? (
          <div className="Hero">
            <div className="HeroGroupBilling">
              <button className="go-back" onClick={this.goBack}>
                {" "}
                Go Back
              </button>
              <h1>
                You will be able to renew your subscription when you have 1 day
                left.
              </h1>
              <h1 style={{ marginTop: "2rem" }}>
                Purchase Date: {datePurchase}
              </h1>
              <h1 style={{ marginTop: "2rem" }}>
                Expiration Date: {dateExpiration}
              </h1>
              <h1 style={{ marginTop: "2rem" }}>Dates Left: {diffDays}</h1>
              {diffDays === 1 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <input
                    name="payment_number"
                    placeholder="Enter your Credit or Debit Card Number"
                    className="input-style"
                    value={payment_number}
                    onChange={this.changePaymentInfo}
                    style={{
                      fontSize: payment_number.length > 0 ? "17px" : "13px",
                    }}
                  />

                  <input
                    name="exp_month"
                    placeholder="Enter your expiration month"
                    className="input-style"
                    value={exp_month}
                    onChange={this.changePaymentInfo}
                  />

                  <input
                    name="exp_year"
                    placeholder="Enter your expiration year"
                    className="input-style"
                    value={exp_year}
                    onChange={this.changePaymentInfo}
                  />

                  <input
                    name="cvv"
                    placeholder="Enter your 3 digit cvv or cvc"
                    className="input-style"
                    value={cvv}
                    onChange={this.changePaymentInfo}
                  />

                  <h1 style={{ fontSize: "13px", marginTop: "1rem" }}>
                    {" "}
                    Example on how to find your cvv or cvc below{" "}
                  </h1>

                  <img
                    src="http://localhost:5000/images/cc.png"
                    style={{
                      width: "15rem",
                      height: "10rem",
                      marginTop: "1rem",
                      borderRadius: "15px",
                    }}
                  />

                  <button
                    className="go-back"
                    style={{ marginTop: "1rem", marginBottom: "2rem" }}
                    onClick={this.processPaymentToSignUp}
                    type="button"
                    disabled={
                      payment_number.length === 0
                        ? true
                        : exp_month.length === 0
                        ? true
                        : exp_year.length === 0
                        ? true
                        : cvv.length === 0
                        ? true
                        : false
                    }
                  >
                    {" "}
                    Pay Now
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="Hero">
            {" "}
            <div className="HeroGroupBilling">
              <h1 style={{ marginTop: "2rem" }}>...Submitting</h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dateExpiration: state.editorReducerProd.dateExpiration,
    datePurchase: state.editorReducerProd.datePurchase,
    email: state.editorReducerProd.email,
    loading: state.editorReducerProd.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    renewFunc: bindActionCreators(renewSubscription, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BillingProd)
);
