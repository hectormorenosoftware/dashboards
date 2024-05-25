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

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    payload: category,
  };
}

export function changeUserName(userName) {
  return {
    type: CHANGE_USER_NAME,
    payload: userName,
  };
}

export function publish(isPublished) {
  return {
    type: PUBLISH,
    payload: isPublished,
  };
}

export function areYouSure(isSure) {
  return {
    type: ARE_YOU_SURE,
    payload: isSure,
  };
}

export function selectUserWebsite(user) {
  return {
    type: SELECT_USER_WEBSITE,
    payload: user,
  };
}

export function changeBusinessType(type) {
  return {
    type: CHANGE_BUSINESS_TYPE,
    payload: type,
  };
}

export function changeTitleNumber(number) {
  return {
    type: CHANGE_TITLE_PHONE_NUMBER,
    payload: number,
  };
}

export function changeTitleName(name) {
  return {
    type: CHANGE_TITLE_NAME,
    payload: name,
  };
}

export function changeTitleColor(color) {
  return {
    type: CHANGE_TITLE_COLOR,
    payload: color,
  };
}

export function changeFirstColor(color) {
  return {
    type: CHANGE_FIRST_COLOR,
    payload: color,
  };
}

export function changeSecondColor(color) {
  return {
    type: CHANGE_SECOND_COLOR,
    payload: color,
  };
}

export function changeMarketingImage(image, file) {
  return {
    type: CHANGE_MARKETING_IMAGE,
    payload: { image, file },
  };
}

export function changeFirstImage(image, file) {
  return {
    type: CHANGE_FIRST_IMAGE,
    payload: { image, file },
  };
}

export function changeSecondImage(image, file) {
  return {
    type: CHANGE_SECOND_IMAGE,
    payload: { image, file },
  };
}

export function changeThirdImage(image, file) {
  return {
    type: CHANGE_THIRD_IMAGE,
    payload: { image, file },
  };
}

export function changeFourthImage(image, file) {
  return {
    type: CHANGE_FOURTH_IMAGE,
    payload: { image, file },
  };
}

export function changeFifthImage(image, file) {
  return {
    type: CHANGE_FIFTH_IMAGE,
    payload: { image, file },
  };
}

export function changeSixthImage(image, file) {
  return {
    type: CHANGE_SIXTH_IMAGE,
    payload: { image, file },
  };
}

export function changeMarketingImagePrice(price) {
  return {
    type: CHANGE_MARKETING_IMAGE_PRICE,
    payload: price,
  };
}

export function changeFirstImagePrice(price) {
  return {
    type: CHANGE_FIRST_IMAGE_PRICE,
    payload: price,
  };
}

export function changeSecondImagePrice(price) {
  return {
    type: CHANGE_SECOND_IMAGE_PRICE,
    payload: price,
  };
}

export function changeThirdImagePrice(price) {
  return {
    type: CHANGE_THIRD_IMAGE_PRICE,
    payload: price,
  };
}

export function changeFourthImagePrice(price) {
  return {
    type: CHANGE_FOURTH_IMAGE_PRICE,
    payload: price,
  };
}

export function changeFifthImagePrice(price) {
  return {
    type: CHANGE_FIFTH_IMAGE_PRICE,
    payload: price,
  };
}

export function changeSixthImagePrice(price) {
  return {
    type: CHANGE_SIXTH_IMAGE_PRICE,
    payload: price,
  };
}

export function changeMarketingImageTitle(title) {
  return {
    type: CHANGE_MARKETING_IMAGE_TITLE,
    payload: title,
  };
}

export function changeFirstImageTitle(title) {
  return {
    type: CHANGE_FIRST_IMAGE_TITLE,
    payload: title,
  };
}

export function changeSecondImageTitle(title) {
  return {
    type: CHANGE_SECOND_IMAGE_TITLE,
    payload: title,
  };
}

export function changeThirdImageTitle(title) {
  return {
    type: CHANGE_THIRD_IMAGE_TITLE,
    payload: title,
  };
}

export function changeFourthImageTitle(title) {
  return {
    type: CHANGE_FOURTH_IMAGE_TITLE,
    payload: title,
  };
}

export function changeFifthImageTitle(title) {
  return {
    type: CHANGE_FIFTH_IMAGE_TITLE,
    payload: title,
  };
}

export function changeSixthImageTitle(title) {
  return {
    type: CHANGE_SIXTH_IMAGE_TITLE,
    payload: title,
  };
}
