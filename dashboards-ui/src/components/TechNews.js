import React from "react";
import NewsCard from "./NewsCard";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../redux/actions/newsActions";
import { bindActionCreators } from "redux";

class TechNews extends React.PureComponent {
  componentDidMount() {
    this.props.getNewsAPI();
  }
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    const { news, fetching } = this.props;

    if (fetching) {
      return (
        <div className="News-Box-Padding">
          <h1 style={{ color: "white", textAlign: "center" }}>
            ...Loading News
          </h1>
        </div>
      );
    }
    return (
      <div className="News-Box-Padding">
        <div className="News-Flex-Box">
          <button className="go-back" onClick={this.goBack}>
            {" "}
            Go Back
          </button>
        </div>

        <div className="Card-Flex-Box">
          <div className="CardGroup">
            {news.length > 0
              ? news.map((article, index) => {
                  return (
                    <NewsCard
                      key={index}
                      title={article.title}
                      text="Click to see more"
                      image={article.urlToImage}
                      url={article.url}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    news: state.newsReducer.news,
    fetching: state.newsReducer.fetching,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getNewsAPI: bindActionCreators(getNews, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TechNews)
);
