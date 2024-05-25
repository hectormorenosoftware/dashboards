import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "../../types";

const INTIAL_STATE = {
  fetching: true,
  news: [],
};

function newsReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { ...state, fetching: true };

    case FETCH_NEWS_SUCCESS:
      return { ...state, fetching: false, news: action.payload };

    case FETCH_NEWS_FAILURE:
      return { ...state, fetching: false, news: [] };

    default:
      return state;
  }
}

export default newsReducer;
