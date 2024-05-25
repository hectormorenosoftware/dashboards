import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCategory } from "../redux/actions/editorDemoActions";
import { bindActionCreators } from "redux";

const categoryNames = [
  "Go Back",
  "Art",
  "Barber",
  "Cars",
  "Catering",
  "Carpenter",
  "Construction",
  "Dentists",
  "Domestic",
  "Doctors",
  "Events",
  "Electrician",
  "Electronics",
  "Fashion",
  "Fitness",
  "Furniture",
  "Garage Sale",
  "Landscape",
  "Lawyers",
  "Mechanic",
  "Nurses",
  "Other",
  "Teachers",
  "Plumber",
  "Psychologists",
  "Rent",
  "Video Games",
];

class ChangeCategory extends React.PureComponent {
  selectCategoryFunc = (name) => {
    if (name === "Go Back") {
      return this.props.history.push("/demo");
    }

    this.props.selectCategorySelect(name);
    this.props.history.push("/demo");
  };
  render() {
    return (
      <div>
        <div className="Hero">
          <div className="HeroCategory">
            {categoryNames.map((category, index) => {
              return (
                <button
                  className="category"
                  key={index}
                  onClick={this.selectCategoryFunc.bind(this, category)}
                >
                  {" "}
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectCategorySelect: bindActionCreators(selectCategory, dispatch),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(ChangeCategory));
