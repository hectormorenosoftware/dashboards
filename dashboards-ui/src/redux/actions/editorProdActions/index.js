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

import axios from "axios";

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};

export function renewSubscriptionRequest() {
  return {
    type: RENEW_SUBSCRIPTION_REQUEST,
  };
}

export function renewSubscriptionSuccess() {
  return {
    type: RENEW_SUBSCRIPTION_SUCCESS,
  };
}

export function renewSubscriptionFailure() {
  return {
    type: RENEW_SUBSCRIPTION_FAILURE,
  };
}

export function getUserDashboardSuccess(data) {
  return {
    type: GET_USER_DASHBOARD_DATA_SUCCESS,
    payload: data,
  };
}

export function updateEmailEditor(email) {
  return {
    type: UPDATE_EMAIL_EDITOR,
    payload: email,
  };
}

export function updateUserRequest() {
  return {
    type: UPDATE_USER_REQUEST,
  };
}

export function updateUserSuccess() {
  return {
    type: UPDATE_USER_SUCCESS,
  };
}

export function updateUserFailure() {
  return {
    type: UPDATE_USER_FAILURE,
  };
}

export function resetEditor() {
  return {
    type: RESET_EDITOR,
  };
}

export function selectCategoryProd(category) {
  return {
    type: SELECT_CATEGORY_PROD,
    payload: category,
  };
}

export function changeUserNameProd(userName) {
  return {
    type: CHANGE_USER_NAME_PROD,
    payload: userName,
  };
}

export function publishProd(isPublished) {
  return {
    type: PUBLISH_PROD,
    payload: isPublished,
  };
}

export function areYouSureProd(isSure) {
  return {
    type: ARE_YOU_SURE_PROD,
    payload: isSure,
  };
}

export function selectUserWebsiteProd(user) {
  return {
    type: SELECT_USER_WEBSITE_PROD,
    payload: user,
  };
}

export function changeBusinessTypeProd(type) {
  return {
    type: CHANGE_BUSINESS_TYPE_PROD,
    payload: type,
  };
}

export function changeTitleNumberProd(number) {
  return {
    type: CHANGE_TITLE_PHONE_NUMBER_PROD,
    payload: number,
  };
}

export function changeTitleNameProd(name) {
  return {
    type: CHANGE_TITLE_NAME_PROD,
    payload: name,
  };
}

export function changeTitleColorProd(color) {
  return {
    type: CHANGE_TITLE_COLOR_PROD,
    payload: color,
  };
}

export function changeFirstColorProd(color) {
  return {
    type: CHANGE_FIRST_COLOR_PROD,
    payload: color,
  };
}

export function changeSecondColorProd(color) {
  return {
    type: CHANGE_SECOND_COLOR_PROD,
    payload: color,
  };
}

export function changeMarketingImageProd(image, file) {
  return {
    type: CHANGE_MARKETING_IMAGE_PROD,
    payload: { image, file },
  };
}

export function changeFirstImageProd(image, file) {
  return {
    type: CHANGE_FIRST_IMAGE_PROD,
    payload: { image, file },
  };
}

export function changeSecondImageProd(image, file) {
  return {
    type: CHANGE_SECOND_IMAGE_PROD,
    payload: { image, file },
  };
}

export function changeThirdImageProd(image, file) {
  return {
    type: CHANGE_THIRD_IMAGE_PROD,
    payload: { image, file },
  };
}

export function changeFourthImageProd(image, file) {
  return {
    type: CHANGE_FOURTH_IMAGE_PROD,
    payload: { image, file },
  };
}

export function changeFifthImageProd(image, file) {
  return {
    type: CHANGE_FIFTH_IMAGE_PROD,
    payload: { image, file },
  };
}

export function changeSixthImageProd(image, file) {
  return {
    type: CHANGE_SIXTH_IMAGE_PROD,
    payload: { image, file },
  };
}

export function changeMarketingImagePriceProd(price) {
  return {
    type: CHANGE_MARKETING_IMAGE_PRICE_PROD,
    payload: price,
  };
}

export function changeFirstImagePriceProd(price) {
  return {
    type: CHANGE_FIRST_IMAGE_PRICE_PROD,
    payload: price,
  };
}

export function changeSecondImagePriceProd(price) {
  return {
    type: CHANGE_SECOND_IMAGE_PRICE_PROD,
    payload: price,
  };
}

export function changeThirdImagePriceProd(price) {
  return {
    type: CHANGE_THIRD_IMAGE_PRICE_PROD,
    payload: price,
  };
}

export function changeFourthImagePriceProd(price) {
  return {
    type: CHANGE_FOURTH_IMAGE_PRICE_PROD,
    payload: price,
  };
}

export function changeFifthImagePriceProd(price) {
  return {
    type: CHANGE_FIFTH_IMAGE_PRICE_PROD,
    payload: price,
  };
}

export function changeSixthImagePriceProd(price) {
  return {
    type: CHANGE_SIXTH_IMAGE_PRICE_PROD,
    payload: price,
  };
}

export function changeMarketingImageTitleProd(title) {
  return {
    type: CHANGE_MARKETING_IMAGE_TITLE_PROD,
    payload: title,
  };
}

export function changeFirstImageTitleProd(title) {
  return {
    type: CHANGE_FIRST_IMAGE_TITLE_PROD,
    payload: title,
  };
}

export function changeSecondImageTitleProd(title) {
  return {
    type: CHANGE_SECOND_IMAGE_TITLE_PROD,
    payload: title,
  };
}

export function changeThirdImageTitleProd(title) {
  return {
    type: CHANGE_THIRD_IMAGE_TITLE_PROD,
    payload: title,
  };
}

export function changeFourthImageTitleProd(title) {
  return {
    type: CHANGE_FOURTH_IMAGE_TITLE_PROD,
    payload: title,
  };
}

export function changeFifthImageTitleProd(title) {
  return {
    type: CHANGE_FIFTH_IMAGE_TITLE_PROD,
    payload: title,
  };
}

export function changeSixthImageTitleProd(title) {
  return {
    type: CHANGE_SIXTH_IMAGE_TITLE_PROD,
    payload: title,
  };
}

export function updateUser(data, email) {
  return async function (dispatch) {
    dispatch(updateUserRequest());

    const filesToPost = [
      {
        file: data.firstImageFile,
        number: 1,
        fileExt: data.firstImageFile.name.split(".").pop(),
        image: `http://localhost:5000/images/${
          data.userName
        }${1}${"."}${data.firstImageFile.name.split(".").pop()}`,
        imageName: `${data.userName}${1}${"."}${data.firstImageFile.name
          .split(".")
          .pop()}`,
        titleOfProduct: data.firstImageTitle,
        priceOfProduct: data.firstImagePrice,
      },
      {
        file: data.secondImageFile,
        number: 2,
        fileExt: data.secondImageFile.name.split(".").pop(),
        image: `http://localhost:5000/images/${
          data.userName
        }${2}${"."}${data.secondImageFile.name.split(".").pop()}`,
        imageName: `${data.userName}${2}${"."}${data.secondImageFile.name
          .split(".")
          .pop()}`,
        titleOfProduct: data.secondImageTitle,
        priceOfProduct: data.secondImagePrice,
      },
      {
        file: data.thirdImageFile,
        number: 3,
        fileExt: data.thirdImageFile.name.split(".").pop(),
        image: `http://localhost:5000/images/${
          data.userName
        }${3}${"."}${data.thirdImageFile.name.split(".").pop()}`,
        imageName: `${data.userName}${3}${"."}${data.thirdImageFile.name
          .split(".")
          .pop()}`,
        titleOfProduct: data.thirdImageTitle,
        priceOfProduct: data.thirdImagePrice,
      },
      {
        file: data.fourthImageFile,
        number: 4,
        fileExt: data.fourthImageFile.name.split(".").pop(),
        image: `http://localhost:5000/images/${
          data.userName
        }${4}${"."}${data.fourthImageFile.name.split(".").pop()}`,
        imageName: `${data.userName}${4}${"."}${data.fourthImageFile.name
          .split(".")
          .pop()}`,
        titleOfProduct: data.fourthImageTitle,
        priceOfProduct: data.fourthImagePrice,
      },
      {
        file: data.fifthImageFile,
        number: 5,
        fileExt: data.fifthImageFile.name.split(".").pop(),
        image: `http://localhost:5000/images/${
          data.userName
        }${5}${"."}${data.fifthImageFile.name.split(".").pop()}`,
        imageName: `${data.userName}${5}${"."}${data.fifthImageFile.name
          .split(".")
          .pop()}`,
        titleOfProduct: data.fifthImageTitle,
        priceOfProduct: data.fifthImagePrice,
      },
      {
        file: data.sixthImageFile,
        number: 6,
        fileExt: data.sixthImageFile.name.split(".").pop(),
        image: `http://localhost:5000/images/${
          data.userName
        }${6}${"."}${data.sixthImageFile.name.split(".").pop()}`,
        imageName: `${data.userName}${6}${"."}${data.sixthImageFile.name
          .split(".")
          .pop()}`,
        titleOfProduct: data.sixthImageTitle,
        priceOfProduct: data.sixthImagePrice,
      },
      {
        file: data.marketingImageFile,
        number: 7,
        fileExt: data.marketingImageFile.name.split(".").pop(),
        image: `http://localhost:5000/images/${
          data.userName
        }${7}${"."}${data.marketingImageFile.name.split(".").pop()}`,
        imageName: `${data.userName}${7}${"."}${data.marketingImageFile.name
          .split(".")
          .pop()}`,
        titleOfProduct: data.marketingImageTitle,
        priceOfProduct: data.marketingImagePrice,
      },
    ];

    try {
      filesToPost.forEach((e) => {
        let formData = new FormData();
        formData.append("file", e.file);
        axios.post(
          `http://localhost:5000/upload/${data.userName}/${e.number}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      });

      const dataToSend = {
        email: email,
        userName: data.userName,
        category: data.category,
        businessName: data.titleName,
        businessNumber: data.titleNumber,
        businessType: data.businessType,
        firstColor: data.firstColor,
        secondColor: data.secondColor,
        titleColor: data.titleColor,
        marketingImage: filesToPost[6].image,
        marketingText: filesToPost[6].priceOfProduct,
        marketingTitle: filesToPost[6].titleOfProduct,
        marketingImageName: filesToPost[6].imageName,
        marketingImageExt: filesToPost[6].fileExt,
        userProducts: [
          {
            image: filesToPost[0].image,
            imageName: filesToPost[0].imageName,
            titleOfProduct: filesToPost[0].titleOfProduct,
            priceOfProduct: filesToPost[0].priceOfProduct,
            fileExt: filesToPost[0].fileExt,
          },
          {
            image: filesToPost[1].image,
            imageName: filesToPost[1].imageName,
            titleOfProduct: filesToPost[1].titleOfProduct,
            priceOfProduct: filesToPost[1].priceOfProduct,
            fileExt: filesToPost[1].fileExt,
          },
          {
            image: filesToPost[2].image,
            imageName: filesToPost[2].imageName,
            titleOfProduct: filesToPost[2].titleOfProduct,
            priceOfProduct: filesToPost[2].priceOfProduct,
            fileExt: filesToPost[2].fileExt,
          },
          {
            image: filesToPost[3].image,
            imageName: filesToPost[3].imageName,
            titleOfProduct: filesToPost[3].titleOfProduct,
            priceOfProduct: filesToPost[3].priceOfProduct,
            fileExt: filesToPost[3].fileExt,
          },
          {
            image: filesToPost[4].image,
            imageName: filesToPost[4].imageName,
            titleOfProduct: filesToPost[4].titleOfProduct,
            priceOfProduct: filesToPost[4].priceOfProduct,
            fileExt: filesToPost[4].fileExt,
          },
          {
            image: filesToPost[5].image,
            imageName: filesToPost[5].imageName,
            titleOfProduct: filesToPost[5].titleOfProduct,
            priceOfProduct: filesToPost[5].priceOfProduct,
            fileExt: filesToPost[5].fileExt,
          },
        ],
      };

      await axios.put("http://localhost:5000/update-user", {
        headers: headers,
        params: dataToSend,
      });

      dispatch(updateUserSuccess());
    } catch (e) {
      dispatch(updateUserFailure());
      throw new Error(e);
    }
  };
}

export function renewSubscription(email, paymentInformation) {
  return async function (dispatch) {
    dispatch(renewSubscriptionRequest());

    try {
      await axios.post("http://localhost:5000/charge-card", {
        headers: headers,
        params: paymentInformation,
      });

      await axios.post(`http://localhost:5000/renew-subscription/${email}`);

      dispatch(renewSubscriptionSuccess());
    } catch (e) {
      dispatch(renewSubscriptionFailure());
      throw new Error(e);
    }
  };
}
