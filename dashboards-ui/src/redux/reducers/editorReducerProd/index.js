import {
  CHANGE_TITLE_COLOR_PROD,
  CHANGE_FIRST_COLOR_PROD,
  CHANGE_SECOND_COLOR_PROD,
  CHANGE_FIRST_IMAGE_PROD,
  CHANGE_SECOND_IMAGE_PROD,
  CHANGE_THIRD_IMAGE_PROD,
  CHANGE_FOURTH_IMAGE_PROD,
  CHANGE_FIFTH_IMAGE_PROD,
  CHANGE_SIXTH_IMAGE_PROD,
  CHANGE_FIRST_IMAGE_PRICE_PROD,
  CHANGE_SECOND_IMAGE_PRICE_PROD,
  CHANGE_THIRD_IMAGE_PRICE_PROD,
  CHANGE_FOURTH_IMAGE_PRICE_PROD,
  CHANGE_FIFTH_IMAGE_PRICE_PROD,
  CHANGE_SIXTH_IMAGE_PRICE_PROD,
  CHANGE_FIRST_IMAGE_TITLE_PROD,
  CHANGE_SECOND_IMAGE_TITLE_PROD,
  CHANGE_THIRD_IMAGE_TITLE_PROD,
  CHANGE_FOURTH_IMAGE_TITLE_PROD,
  CHANGE_FIFTH_IMAGE_TITLE_PROD,
  CHANGE_SIXTH_IMAGE_TITLE_PROD,
  CHANGE_TITLE_NAME_PROD,
  CHANGE_TITLE_PHONE_NUMBER_PROD,
  CHANGE_BUSINESS_TYPE_PROD,
  SELECT_USER_WEBSITE_PROD,
  PUBLISH_PROD,
  ARE_YOU_SURE_PROD,
  CHANGE_MARKETING_IMAGE_PROD,
  CHANGE_MARKETING_IMAGE_TITLE_PROD,
  CHANGE_MARKETING_IMAGE_PRICE_PROD,
  CHANGE_USER_NAME_PROD,
  SELECT_CATEGORY_PROD,
  RESET_EDITOR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_EMAIL_EDITOR,
  GET_USER_DASHBOARD_DATA_SUCCESS,
  RENEW_SUBSCRIPTION_REQUEST,
  RENEW_SUBSCRIPTION_SUCCESS,
  RENEW_SUBSCRIPTION_FAILURE,
} from "../../types";

const today = new Date();
const thirtyDaySubscription = new Date(today);
thirtyDaySubscription.setDate(thirtyDaySubscription.getDate() + 30);

const INTIAL_STATE = {
  firstBadgeColors: [
    "#FFFFFF",
    "#000000",
    "#ffafbd",
    "#ffc3a0",
    "#2193b0",
    "#6dd5ed",
    "#cc2b5e",
    "#753a88",
    "#ee9ca7",
    "#ffdde1",
    "#42275a",
    "#734b6d",
    "#bdc3c7",
    "#2c3e50",
    "#de6262",
    "#ffb88c",
    "#06beb6",
    "#48b1b",
    "#eb3349",
    "#f45c43",
    "#dd5e89",
    "#f7bb97",
    "#56ab2f",
    "#a8e063",
    "#516395",
    "#eecda3",
    "#ef629f",
    "#eacda3",
    "#d6ae7b",
    "#02aab0",
    "#00cdac",
    "#d66d75",
    "#e29587",
    "#000428",
    "#004e92",
    "#ddd6f3",
    "#faaca8",
    "#7b4397",
    "#dc2430",
    "#43cea2",
    "#185a9d",
    "#ba5370",
    "#f4e2d8",
    "#ff512f",
    "#dd2476",
    "#4568dc",
    "#b06ab3",
    "#ec6f66",
    "#f3a183",
    "#ffd89b",
    "#19547b",
    "#3a1c71",
    "#d76d77",
    "#ffaf7b",
    "#4ca1af",
    "#c4e0e5",
    "#ff5f6d",
    "#ffc371",
    "#36d1dc",
    "#5b86e5",
    "#c33764",
    "#1d2671",
    "#141e30",
    "#243b55",
    "#ff7e5f",
    "#feb47b",
    "#ed4264",
    "#ffedbc",
    "#2b5876",
    "#4e4376",
    "#ff9966",
    "#ff5e62",
    "#aa076b",
    "#61045f",
    "#ef9d10f",
    "#ff6e40",
    "#1e2761",
    "#ed3572",
    "#d902ee",
    "#500472",
    "#ffcb05",
    "#2a75bb",
    "#c7a008",
    "#3c5aa6",
    "#ff0000",
    "#FB1B1B",
    "#000000",
    "#DFDFDF",
    "#7BAA15",
    "#8E64B5",
    "#FA59AA",
    "#EDBB03",
    "#038FFD",
    "#FFCE00",
    "#119FF4",
    "#8BD305",
  ],
  titleColor: "#FFFFFF",
  firstColor: "#1d2671",
  secondColor: "#19547b",
  firstImage: "",
  firstImageFile: null,
  firstImagePrice: "",
  firstImageTitle: "",
  secondImage: "",
  secondImageFile: null,
  secondImagePrice: "",
  secondImageTitle: "",
  thirdImage: "",
  thirdImageFile: null,
  thirdImagePrice: "",
  thirdImageTitle: "",
  fourthImage: "",
  fourthImageFile: null,
  fourthImagePrice: "",
  fourthImageTitle: "",
  fifthImage: "",
  fifthImageFile: null,
  fifthImagePrice: "",
  fifthImageTitle: "",
  sixthImage: "",
  sixthImageFile: null,
  sixthImagePrice: "",
  sixthImageTitle: "",
  marketingImage: "",
  marketingImageFile: null,
  marketingImagePrice: "",
  marketingImageTitle: "",
  titleName: "",
  titleNumber: "",
  businessType: "sales",
  selectedUser: "user-one",
  publish: false,
  are_you_sure: false,
  userName: "",
  category: "",
  dateExpiration: thirtyDaySubscription.toLocaleDateString(),
  datePurchase: today.toLocaleDateString(),
  datesLeft: "",
  loading: false,
  email: "",
};

function editorReducerProd(state = INTIAL_STATE, action) {
  switch (action.type) {
    case RENEW_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RENEW_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        dateExpiration: thirtyDaySubscription.toLocaleDateString(),
        datePurchase: today.toLocaleDateString(),
      };
    case RENEW_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_EMAIL_EDITOR:
      return { ...state, email: action.payload };
    case SELECT_CATEGORY_PROD:
      return { ...state, category: action.payload };
    case CHANGE_USER_NAME_PROD:
      return { ...state, userName: action.payload };
    case PUBLISH_PROD:
      return { ...state, publish: action.payload };
    case ARE_YOU_SURE_PROD:
      return { ...state, are_you_sure: action.payload };
    case SELECT_USER_WEBSITE_PROD:
      return { ...state, selectedUser: action.payload };
    case CHANGE_BUSINESS_TYPE_PROD:
      return { ...state, businessType: action.payload };
    case CHANGE_TITLE_NAME_PROD:
      return { ...state, titleName: action.payload };
    case CHANGE_TITLE_PHONE_NUMBER_PROD:
      return { ...state, titleNumber: action.payload };
    case CHANGE_TITLE_COLOR_PROD:
      return { ...state, titleColor: action.payload };
    case CHANGE_FIRST_COLOR_PROD:
      return { ...state, firstColor: action.payload };
    case CHANGE_SECOND_COLOR_PROD:
      return { ...state, secondColor: action.payload };
    case CHANGE_MARKETING_IMAGE_PROD:
      return {
        ...state,
        marketingImage: action.payload.image,
        marketingImageFile: action.payload.file,
      };
    case CHANGE_FIRST_IMAGE_PROD:
      return {
        ...state,
        firstImage: action.payload.image,
        firstImageFile: action.payload.file,
      };
    case CHANGE_SECOND_IMAGE_PROD:
      return {
        ...state,
        secondImage: action.payload.image,
        secondImageFile: action.payload.file,
      };
    case CHANGE_THIRD_IMAGE_PROD:
      return {
        ...state,
        thirdImage: action.payload.image,
        thirdImageFile: action.payload.file,
      };
    case CHANGE_FOURTH_IMAGE_PROD:
      return {
        ...state,
        fourthImage: action.payload.image,
        fourthImageFile: action.payload.file,
      };
    case CHANGE_FIFTH_IMAGE_PROD:
      return {
        ...state,
        fifthImage: action.payload.image,
        fifthImageFile: action.payload.file,
      };
    case CHANGE_SIXTH_IMAGE_PROD:
      return {
        ...state,
        sixthImage: action.payload.image,
        sixthImageFile: action.payload.file,
      };
    case CHANGE_MARKETING_IMAGE_PRICE_PROD:
      return { ...state, marketingImagePrice: action.payload };
    case CHANGE_FIRST_IMAGE_PRICE_PROD:
      return { ...state, firstImagePrice: action.payload };
    case CHANGE_SECOND_IMAGE_PRICE_PROD:
      return { ...state, secondImagePrice: action.payload };
    case CHANGE_THIRD_IMAGE_PRICE_PROD:
      return { ...state, thirdImagePrice: action.payload };
    case CHANGE_FOURTH_IMAGE_PRICE_PROD:
      return { ...state, fourthImagePrice: action.payload };
    case CHANGE_FIFTH_IMAGE_PRICE_PROD:
      return { ...state, fifthImagePrice: action.payload };
    case CHANGE_SIXTH_IMAGE_PRICE_PROD:
      return { ...state, sixthImagePrice: action.payload };
    case CHANGE_MARKETING_IMAGE_TITLE_PROD:
      return { ...state, marketingImageTitle: action.payload };
    case CHANGE_FIRST_IMAGE_TITLE_PROD:
      return { ...state, firstImageTitle: action.payload };
    case CHANGE_SECOND_IMAGE_TITLE_PROD:
      return { ...state, secondImageTitle: action.payload };
    case CHANGE_THIRD_IMAGE_TITLE_PROD:
      return { ...state, thirdImageTitle: action.payload };
    case CHANGE_FOURTH_IMAGE_TITLE_PROD:
      return { ...state, fourthImageTitle: action.payload };
    case CHANGE_FIFTH_IMAGE_TITLE_PROD:
      return { ...state, fifthImageTitle: action.payload };
    case CHANGE_SIXTH_IMAGE_TITLE_PROD:
      return { ...state, sixthImageTitle: action.payload };
    case RESET_EDITOR:
      return { ...INTIAL_STATE };
    case UPDATE_USER_REQUEST:
      return { ...state, loading: true };

    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false };

    case UPDATE_USER_FAILURE:
      return { ...state, loading: false };

    case GET_USER_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        category: action.payload.marketingData.category,
        titleName: action.payload.businessName,
        titleNumber: action.payload.businessNumber,
        businessType: action.payload.businessType,
        dateExpiration: action.payload.dateOfExpiration,
        datePurchase: action.payload.dateOfPurchase,
        email: action.payload.email,
        marketingImage: action.payload.marketingData.marketingImage,
        marketingImageTitle: action.payload.marketingData.marketingTitle,
        marketingImagePrice: action.payload.marketingData.marketingText,
        firstColor: action.payload.firstColor,
        secondColor: action.payload.secondColor,
        titleColor: action.payload.titleColor,
        userName: action.payload.username,
        firstImage: action.payload.userProducts[0].image,
        firstImageFile: null,
        firstImagePrice: action.payload.userProducts[0].priceOfProduct,
        firstImageTitle: action.payload.userProducts[0].titleOfProduct,
        secondImage: action.payload.userProducts[1].image,
        secondImageFile: null,
        secondImagePrice: action.payload.userProducts[1].priceOfProduct,
        secondImageTitle: action.payload.userProducts[1].titleOfProduct,
        thirdImage: action.payload.userProducts[2].image,
        thirdImageFile: null,
        thirdImagePrice: action.payload.userProducts[2].priceOfProduct,
        thirdImageTitle: action.payload.userProducts[2].titleOfProduct,
        fourthImage: action.payload.userProducts[3].image,
        fourthImageFile: null,
        fourthImagePrice: action.payload.userProducts[3].priceOfProduct,
        fourthImageTitle: action.payload.userProducts[3].titleOfProduct,
        fifthImage: action.payload.userProducts[4].image,
        fifthImageFile: null,
        fifthImagePrice: action.payload.userProducts[4].priceOfProduct,
        fifthImageTitle: action.payload.userProducts[4].titleOfProduct,
        sixthImage: action.payload.userProducts[5].image,
        sixthImageFile: null,
        sixthImagePrice: action.payload.userProducts[5].priceOfProduct,
        sixthImageTitle: action.payload.userProducts[5].titleOfProduct,
      };

    default:
      return state;
  }
}

export default editorReducerProd;
