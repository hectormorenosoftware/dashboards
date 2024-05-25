import {
  CHANGE_TITLE_COLOR,
  CHANGE_FIRST_COLOR,
  CHANGE_SECOND_COLOR,
  CHANGE_FIRST_IMAGE,
  CHANGE_SECOND_IMAGE,
  CHANGE_THIRD_IMAGE,
  CHANGE_FOURTH_IMAGE,
  CHANGE_FIFTH_IMAGE,
  CHANGE_SIXTH_IMAGE,
  CHANGE_FIRST_IMAGE_PRICE,
  CHANGE_SECOND_IMAGE_PRICE,
  CHANGE_THIRD_IMAGE_PRICE,
  CHANGE_FOURTH_IMAGE_PRICE,
  CHANGE_FIFTH_IMAGE_PRICE,
  CHANGE_SIXTH_IMAGE_PRICE,
  CHANGE_FIRST_IMAGE_TITLE,
  CHANGE_SECOND_IMAGE_TITLE,
  CHANGE_THIRD_IMAGE_TITLE,
  CHANGE_FOURTH_IMAGE_TITLE,
  CHANGE_FIFTH_IMAGE_TITLE,
  CHANGE_SIXTH_IMAGE_TITLE,
  CHANGE_TITLE_NAME,
  CHANGE_TITLE_PHONE_NUMBER,
  CHANGE_BUSINESS_TYPE,
  SELECT_USER_WEBSITE,
  PUBLISH,
  ARE_YOU_SURE,
  CHANGE_MARKETING_IMAGE,
  CHANGE_MARKETING_IMAGE_TITLE,
  CHANGE_MARKETING_IMAGE_PRICE,
  CHANGE_USER_NAME,
  SELECT_CATEGORY,
} from "../../types";

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
  firstColor: "#2193b0",
  secondColor: "#19547b",
  firstImage: "",
  firstImageFile: null,
  firstImagePrice: "79",
  firstImageTitle: "Classic Black Wool-blend Tuxedo",
  secondImage: "",
  secondImageFile: null,
  secondImagePrice: "59",
  secondImageTitle: "Extra Slim Black Suit",
  thirdImage: "",
  thirdImageFile: null,
  thirdImagePrice: "45",
  thirdImageTitle: "Extra Slim Solid Gray Suit",
  fourthImage: "",
  fourthImageFile: null,
  fourthImagePrice: "39",
  fourthImageTitle: "Slim Textured Navy Suit",
  fifthImage: "",
  fifthImageFile: null,
  fifthImagePrice: "29",
  fifthImageTitle: "Classic Textured Gray Suit",
  sixthImage: "",
  sixthImageFile: null,
  sixthImagePrice: "79",
  sixthImageTitle: "Extra Slim Gray Tech Suit",
  marketingImage: "",
  marketingImageFile: null,
  marketingImagePrice: "Now everything at 20% off",
  marketingImageTitle: "Amy's Suit Store",
  titleName: "Amy's Suit Store",
  titleNumber: "202-304-2494",
  businessType: "sales",
  selectedUser: "user-one",
  publish: false,
  are_you_sure: false,
  userName: "amysuitstore",
  category: "",
  dateExpiration: "12-21-2021",
  datePurchase: "11-21-2021",
  datesLeft: 30,
};

function editorReducerDemo(state = INTIAL_STATE, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, category: action.payload };
    case CHANGE_USER_NAME:
      return { ...state, userName: action.payload };
    case PUBLISH:
      return { ...state, publish: action.payload };
    case ARE_YOU_SURE:
      return { ...state, are_you_sure: action.payload };
    case SELECT_USER_WEBSITE:
      return { ...state, selectedUser: action.payload };
    case CHANGE_BUSINESS_TYPE:
      return { ...state, businessType: action.payload };
    case CHANGE_TITLE_NAME:
      return { ...state, titleName: action.payload };
    case CHANGE_TITLE_PHONE_NUMBER:
      return { ...state, titleNumber: action.payload };
    case CHANGE_TITLE_COLOR:
      return { ...state, titleColor: action.payload };
    case CHANGE_FIRST_COLOR:
      return { ...state, firstColor: action.payload };
    case CHANGE_SECOND_COLOR:
      return { ...state, secondColor: action.payload };
    case CHANGE_MARKETING_IMAGE:
      return {
        ...state,
        marketingImage: action.payload.image,
        marketingImageFile: action.payload.file,
      };
    case CHANGE_FIRST_IMAGE:
      return {
        ...state,
        firstImage: action.payload.image,
        firstImageFile: action.payload.file,
      };
    case CHANGE_SECOND_IMAGE:
      return {
        ...state,
        secondImage: action.payload.image,
        secondImageFile: action.payload.file,
      };
    case CHANGE_THIRD_IMAGE:
      return {
        ...state,
        thirdImage: action.payload.image,
        thirdImageFile: action.payload.file,
      };
    case CHANGE_FOURTH_IMAGE:
      return {
        ...state,
        fourthImage: action.payload.image,
        fourthImageFile: action.payload.file,
      };
    case CHANGE_FIFTH_IMAGE:
      return {
        ...state,
        fifthImage: action.payload.image,
        fifthImageFile: action.payload.file,
      };
    case CHANGE_SIXTH_IMAGE:
      return {
        ...state,
        sixthImage: action.payload.image,
        sixthImageFile: action.payload.file,
      };
    case CHANGE_MARKETING_IMAGE_PRICE:
      return { ...state, marketingImagePrice: action.payload };
    case CHANGE_FIRST_IMAGE_PRICE:
      return { ...state, firstImagePrice: action.payload };
    case CHANGE_SECOND_IMAGE_PRICE:
      return { ...state, secondImagePrice: action.payload };
    case CHANGE_THIRD_IMAGE_PRICE:
      return { ...state, thirdImagePrice: action.payload };
    case CHANGE_FOURTH_IMAGE_PRICE:
      return { ...state, fourthImagePrice: action.payload };
    case CHANGE_FIFTH_IMAGE_PRICE:
      return { ...state, fifthImagePrice: action.payload };
    case CHANGE_SIXTH_IMAGE_PRICE:
      return { ...state, sixthImagePrice: action.payload };
    case CHANGE_MARKETING_IMAGE_TITLE:
      return { ...state, marketingImageTitle: action.payload };
    case CHANGE_FIRST_IMAGE_TITLE:
      return { ...state, firstImageTitle: action.payload };
    case CHANGE_SECOND_IMAGE_TITLE:
      return { ...state, secondImageTitle: action.payload };
    case CHANGE_THIRD_IMAGE_TITLE:
      return { ...state, thirdImageTitle: action.payload };
    case CHANGE_FOURTH_IMAGE_TITLE:
      return { ...state, fourthImageTitle: action.payload };
    case CHANGE_FIFTH_IMAGE_TITLE:
      return { ...state, fifthImageTitle: action.payload };
    case CHANGE_SIXTH_IMAGE_TITLE:
      return { ...state, sixthImageTitle: action.payload };

    default:
      return state;
  }
}

export default editorReducerDemo;
