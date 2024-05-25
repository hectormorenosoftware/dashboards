import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";

class Header extends React.PureComponent {
  state = {
    hasScrolled: false,
  };

  componentDidMount() {
    const node = document.getElementById("navbar");
    if (node) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  routeToAbout = () => {
    this.props.history.push("/about");
  };

  routeToDemo = () => {
    this.props.history.push("/demo");
  };

  routeToPayments = () => {
    this.props.history.push("/payments");
  };

  routeContact = () => {
    this.props.history.push("/contact");
  };

  routeToPrivacy = () => {
    this.props.history.push("/privacy");
  };

  routeToForgotPassword = () => {
    this.props.history.push("/forgot-password");
  };

  routeToTechnology = () => {
    this.props.history.push("/technology");
  };
  routeToPhilantrophy = () => {
    this.props.history.push("/philantrophy");
  };

  routeToFreeMembership = () => {
    this.props.history.push("/free-membership");
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup" id="navbar">
          <a className="cursor-nav" onClick={this.routeToAbout}>
            About
          </a>

          <a className="cursor-nav" onClick={this.routeToPayments}>
            Receive Payments
          </a>

          <a className="cursor-nav" onClick={this.routeToFreeMembership}>
            Free Membership
          </a>

          <a
            className="cursor-nav"
            onClick={this.routeToForgotPassword}
            style={{ textAlign: "center" }}
          >
            Forgot Password
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Header));
