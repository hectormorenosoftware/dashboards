import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Philantrophy extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="Hero">
          <div className="HeroGroupPhilantrophy">
            <button className="go-back" onClick={this.goBack}>
              {" "}
              Go Back
            </button>
            <h1>
              Dashboards will be giving $1.5 million dollars in regression free
              code in React JS, Redux, JSX, JavaScript, ES6, ES7, Webpack,
              Babel, Node JS, Express, and Mongo DB. Please come back at another
              time when our marketing team is ready to show case this
              philatrophic work to the world.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Philantrophy));
