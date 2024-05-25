import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  showPassword,
  changeEmailSignUp,
  changeUserNameSignUp,
  changePasswordSignUp,
} from "../redux/actions/signupActions";

import { processPayment } from "../redux/actions/paymentSubmissionActions";
import {
  updateEmailEditor,
  changeUserNameProd,
} from "../redux/actions/editorProdActions";

class SignUp extends React.PureComponent {
  state = {
    disabled: false,
    payment_number: "",
    exp_month: "",
    exp_year: "",
    cvv: "",
  };
  routeToRoot = () => {
    this.props.history.push("/");
  };

  changeUserInput = (e) => {
    const { name, value } = e.target;
    const { changeEmailSgnUp, changeUserNameSgnUp, changePasswordSgnUp } =
      this.props;

    if (name === "username") {
      changeUserNameSgnUp(value);
    }

    if (name === "password") {
      changePasswordSgnUp(value);
    }

    if (name === "email") {
      changeEmailSgnUp(value);
    }
  };

  changePaymentInfo = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  changePasswordVisibility = () => {
    const { showPwd, isShowPassword } = this.props;
    showPwd(!isShowPassword);
  };

  processPaymentToSignUp = () => {
    const { payment_number, exp_month, exp_year, cvv } = this.state;
    const {
      email,
      processPaymentSignUp,
      history,
      username,
      password,
      updateEmailFunc,
      changeUserNameFunc,
    } = this.props;
    const userDetails = { email, username, password };
    const parsedExpMonth = parseInt(exp_month);
    const parsedExpYear = parseInt(exp_year);

    processPaymentSignUp(
      {
        payment_number,
        parsedExpMonth,
        parsedExpYear,
        cvv,
        email,
      },
      userDetails,
      history
    );

    updateEmailFunc(email);
    changeUserNameFunc(username);
  };

  render() {
    const {
      username,
      email,
      password,
      isShowPassword,
      submittingPayment,
      status,
    } = this.props;
    const { payment_number, exp_month, exp_year, cvv } = this.state;

    return (
      <div className="Hero">
        {submittingPayment === false ? (
          <div className="Hero">
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: "white",
              }}
            >
              {status === "failed"
                ? "Could not process your payment at this moment please try again another time"
                : "Payment processing is handled by Stripe, Stripe is used by Google, Amazon, and Lyft. You will be charged $15."}
            </h2>
            <div className="flexbox-signup">
              <button className="go-back" onClick={this.routeToRoot}>
                {" "}
                Go Back
              </button>
              <button
                className="show-password"
                onClick={this.changePasswordVisibility}
              >
                {" "}
                {isShowPassword ? "Hide Password" : "Show Password"}
              </button>
            </div>
            <div className="flexbox-three">
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="input-style"
                value={email}
                onChange={this.changeUserInput}
              />
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="input-style"
                value={username}
                onChange={this.changeUserInput}
              />
              <input
                type={isShowPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input-style"
                value={password}
                onChange={this.changeUserInput}
              />

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
                  username.length === 0
                    ? true
                    : email.password === 0
                    ? true
                    : password.length === 0
                    ? true
                    : payment_number.length === 0
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
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          <div className="HeroGroupSuccessSignUp">
            <h2 className="submitting-header">...Submitting</h2>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isShowPassword: state.signupReducer.showPassword,
    email: state.signupReducer.email,
    username: state.signupReducer.username,
    password: state.signupReducer.password,
    submittingPayment: state.paymentReducer.submittingPayment,
    status: state.paymentReducer.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeUserNameFunc: (username) => dispatch(changeUserNameProd(username)),
    showPwd: (show) => dispatch(showPassword(show)),
    changeEmailSgnUp: (email) => dispatch(changeEmailSignUp(email)),
    changeUserNameSgnUp: (username) => dispatch(changeUserNameSignUp(username)),
    changePasswordSgnUp: (password) => dispatch(changePasswordSignUp(password)),
    processPaymentSignUp: bindActionCreators(processPayment, dispatch),
    updateEmailFunc: bindActionCreators(updateEmailEditor, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
