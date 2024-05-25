import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  showPasswordLogin,
  changeEmailLogin,
  changePasswordLogin,
  login,
} from "../redux/actions/loginActions";
import { updateEmailEditor } from "../redux/actions/editorProdActions";

class Login extends React.PureComponent {
  state = {
    typeError: false,
  };
  routeToRoot = () => {
    this.props.history.push("/");
  };

  changeUserInput = (e) => {
    const { name, value } = e.target;
    const { changeEmailLgn, changePasswordLgn } = this.props;

    if (name === "password") {
      changePasswordLgn(value);
    }

    if (name === "email") {
      changeEmailLgn(value);
    }
  };

  changePasswordVisibility = () => {
    const { showPwdLgn, isShowPassword } = this.props;
    showPwdLgn(!isShowPassword);
  };

  submitLogin = () => {
    const { email, password, loginFunc, history, updateEmailFunc } = this.props;
    if (email.length === 0 || password.length === 0) {
      return this.setState({ typeError: true });
    }

    loginFunc({ email, password }, history);
    updateEmailFunc(email);
    this.setState({ typeError: false });
  };

  render() {
    const { email, password, isShowPassword, error, loading } = this.props;
    const { typeError } = this.state;

    if (loading) {
      return (
        <div className="Hero">
          <div className="HeroGroupLogin">
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: "white",
              }}
            >
              ...Submitting
            </h2>
          </div>
        </div>
      );
    }
    return (
      <div className="Hero">
        <div className="HeroGroupLogin">
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              color: "white",
            }}
          >
            {error
              ? "Your email and password is wrong or your subscription has expired, if you subscription has expired you will have to sign up again."
              : "Please enter your email and password, you will be redirected to your dashboard once you enter your credentials"}
          </h2>
          {typeError ? (
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: "white",
              }}
            >
              You need to type your email and password to continue
            </h2>
          ) : null}
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
              type={isShowPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input-style"
              value={password}
              onChange={this.changeUserInput}
            />

            <button
              className="go-back"
              style={{ marginTop: "1rem" }}
              onClick={this.submitLogin}
            >
              {" "}
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isShowPassword: state.loginReducer.showPassword,
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    error: state.loginReducer.error,
    loading: state.loginReducer.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showPwdLgn: (show) => dispatch(showPasswordLogin(show)),
    changeEmailLgn: (email) => dispatch(changeEmailLogin(email)),
    changePasswordLgn: (password) => dispatch(changePasswordLogin(password)),
    loginFunc: bindActionCreators(login, dispatch),
    updateEmailFunc: bindActionCreators(updateEmailEditor, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
