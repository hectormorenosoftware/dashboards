import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class About extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="Hero">
          <div className="HeroGroupAbout">
            <button className="go-back" onClick={this.goBack}>
              {" "}
              Go Back
            </button>
            <h1>
              Dashboards is a simple platform for businesses and individuals to
              sell their items or to allow their customers to schedule meetings.
              This website is developed by developers from Apple. We do not
              process refunds all sales are final, you cannot add more than 30
              days of credit to your account, we will allow you to add credit to
              your account 1 day before your subscription expires. We do not
              store credit card or debit card information.
              <br />
            </h1>
            <h1 style={{ fontSize: "16px" }}>Cupertino, California 2021</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(About));
