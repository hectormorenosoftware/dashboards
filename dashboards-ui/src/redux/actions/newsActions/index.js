import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "../../types";
import axios from "axios";

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};

export function fetchNewsRequest() {
  return {
    type: FETCH_NEWS_REQUEST,
  };
}

export function fetchNewsSuccess(response) {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: response,
  };
}

export function fetchNewsFailure(error) {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
}

export function getNews() {
  return async function (dispatch) {
    dispatch(fetchNewsRequest());

    try {
      const data = await axios.get("http://localhost:5000/news", {
        headers: headers,
      });

      const { articles } = data.data;
      dispatch(fetchNewsSuccess(articles));
    } catch (e) {
      dispatch(fetchNewsFailure());
      throw new Error(e);
    }
  };
}
