import React from "react";
import Header from "./HeaderSection";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class IndexPage extends React.PureComponent {
  routeToGetStarted = () => {
    this.props.history.push("/get-started");
  };

  routeToDemo = () => {
    this.props.history.push("/demo");
  };

  routeToLogin = () => {
    this.props.history.push("/login");
  };

  routeToSignup = () => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div>
        <Header />
        <div className="Hero">
          <div className="HeroGroupHero">
            <h1>
              Get a simple website to sell your products or schedule meetings
              with your clients <br />
              Websites start at $15 per month
              <br />
              We don't store your payment information <br />
              We promote your website for you
            </h1>
            <button className="hero-button" onClick={this.routeToLogin}>
              {" "}
              Login
            </button>
            <button className="hero-button" onClick={this.routeToSignup}>
              {" "}
              Sign Up
            </button>

            <button className="hero-button" onClick={this.routeToDemo}>
              {" "}
              Free Trial
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(IndexPage));
