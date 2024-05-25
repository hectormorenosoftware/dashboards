import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeTitleColorProd,
  changeFirstColorProd,
  changeSecondColorProd,
  changeFirstImageProd,
  changeSecondImageProd,
  changeThirdImageProd,
  changeFourthImageProd,
  changeFifthImageProd,
  changeSixthImageProd,
  changeFirstImagePriceProd,
  changeSecondImagePriceProd,
  changeThirdImagePriceProd,
  changeFourthImagePriceProd,
  changeFifthImagePriceProd,
  changeSixthImagePriceProd,
  changeFirstImageTitleProd,
  changeSecondImageTitleProd,
  changeThirdImageTitleProd,
  changeFourthImageTitleProd,
  changeFifthImageTitleProd,
  changeSixthImageTitleProd,
  changeTitleNameProd,
  changeTitleNumberProd,
  changeBusinessTypeProd,
  selectUserWebsiteProd,
  areYouSureProd,
  publishProd,
  changeMarketingImageProd,
  changeMarketingImagePriceProd,
  changeMarketingImageTitleProd,
  changeUserNameProd,
  resetEditor,
  updateUser,
} from "../redux/actions/editorProdActions";

import { resetLogin } from "../redux/actions/loginActions";

import CardProd from "./CardProd";

class EditorPage extends React.PureComponent {
  componentDidMount() {
    const { firstColor, secondColor } = this.props;
    let body = document.getElementsByClassName("body-one")[0];
    body.style.background = `linear-gradient(102.24deg, ${firstColor} 0%, ${secondColor} 100%)`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
  }
  state = {
    errorImages: false,
  };
  changeColorTitle = (color) => {
    const { changeColorOfTitle } = this.props;
    changeColorOfTitle(color);
  };
  changeFirstColorBackgroundStyle = (color) => {
    const { changeColorOfBackroundFirstColor, secondColor } = this.props;
    changeColorOfBackroundFirstColor(color);
    let body = document.getElementsByClassName("body-one")[0];
    body.style.background = `linear-gradient(102.24deg, ${color} 0%, ${secondColor} 100%)`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
  };
  changeSecondColorBackgroundStyle = (color) => {
    const { changeColorOfBackroundSecondColor, firstColor } = this.props;
    changeColorOfBackroundSecondColor(color);
    let body = document.getElementsByClassName("body-one")[0];
    body.style.background = `linear-gradient(102.24deg, ${firstColor} 0%, ${color} 100%)`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
  };

  getBase64 = (file) =>
    new Promise(function (resolve, reject) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject("Error: ", error);
    });

  selectFirstFiles = async (e) => {
    try {
      const file = e.target.files[0];
      const data = await this.getBase64(file);
      this.props.changeFirstImageSelect(data, file);
    } catch (e) {
      throw new Error(e);
    }
  };

  selectSecondFiles = async (e) => {
    try {
      const file = e.target.files[0];
      const data = await this.getBase64(file);
      this.props.changeSecondImageSelect(data, file);
    } catch (e) {
      throw new Error(e);
    }
  };

  selectThirdFiles = async (e) => {
    try {
      const file = e.target.files[0];
      const data = await this.getBase64(file);
      this.props.changeThirdImageSelect(data, file);
    } catch (e) {
      throw new Error(e);
    }
  };

  selectFourthFiles = async (e) => {
    try {
      const file = e.target.files[0];
      const data = await this.getBase64(file);
      this.props.changeFourthImageSelect(data, file);
    } catch (e) {
      throw new Error(e);
    }
  };

  selectFifthFiles = async (e) => {
    try {
      const file = e.target.files[0];
      const data = await this.getBase64(file);
      this.props.changeFifthImageSelect(data, file);
    } catch (e) {
      throw new Error(e);
    }
  };

  selectSixthFiles = async (e) => {
    try {
      const file = e.target.files[0];
      const data = await this.getBase64(file);
      this.props.changeSixthImageSelect(data, file);
    } catch (e) {
      throw new Error(e);
    }
  };

  selectMarketingWallImage = async (e) => {
    try {
      const file = e.target.files[0];
      const data = await this.getBase64(file);
      this.props.changeMarketingImageSelect(data, file);
    } catch (e) {
      throw new Error(e);
    }
  };

  selectMarketingImageTitle = (e) => {
    this.props.changeMarketingImageSelectTitle(e.target.value);
  };

  selectMarketingPriceTitle = (e) => {
    this.props.changeMarketingImageSelectPrice(e.target.value);
  };

  selectFirstImageTitle = (e) => {
    this.props.changeFirstImageSelectTitle(e.target.value);
  };

  selectSecondImageTitle = (e) => {
    this.props.changeSecondImageSelectTitle(e.target.value);
  };

  selectThirdImageTitle = (e) => {
    this.props.changeThirdImageSelectTitle(e.target.value);
  };

  selectFourthImageTitle = (e) => {
    this.props.changeFourthImageSelectTitle(e.target.value);
  };

  selectFifthImageTitle = (e) => {
    this.props.changeFifthImageSelectTitle(e.target.value);
  };

  selectSixthImageTitle = (e) => {
    this.props.changeSixthImageSelectTitle(e.target.value);
  };

  selectFirstImagePrice = (e) => {
    this.props.changeFirstImageSelectPrice(e.target.value);
  };

  selectSecondImagePrice = (e) => {
    this.props.changeSecondImageSelectPrice(e.target.value);
  };

  selectThirdImagePrice = (e) => {
    this.props.changeThirdImageSelectPrice(e.target.value);
  };

  selectFourthImagePrice = (e) => {
    this.props.changeFourthImageSelectPrice(e.target.value);
  };

  selectFifthImagePrice = (e) => {
    this.props.changeFifthImageSelectPrice(e.target.value);
  };

  selectSixthImagePrice = (e) => {
    this.props.changeSixthImageSelectPrice(e.target.value);
  };

  selectTitle = (e) => {
    this.props.changeTitleBusinessSelect(e.target.value);
  };

  selectNumber = (e) => {
    this.props.changeNumberBusinessSelect(e.target.value);
  };

  selectUserName = (e) => {
    this.props.changeUserNameSelect(e.target.value);
  };

  selectBusinessType = (type) => {
    this.props.changeTypeBusinessSelect(type);
  };

  selectUserSiteType = (type) => {
    this.props.changeSelectedUserSite(type);
    if (type === "user-two") {
      this.props.changeNumberBusinessSelect("619-908-2834");
    }
    if (type === "user-three") {
      this.props.changeNumberBusinessSelect("718-989-3747");
      return this.selectBusinessType("meetings");
    }

    if (type === "user-four") {
      this.props.changeNumberBusinessSelect("512-384-3848");
    }
    this.selectBusinessType("sales");
  };

  goBackToHome = () => {
    const { resetEditorFunc, resetLoginFunc } = this.props;
    this.props.history.push("/");
    resetEditorFunc();
    resetLoginFunc();
  };

  goToDashboard = () => {
    this.props.history.push("/orders-prod");
  };

  goToBilling = () => {
    this.props.history.push("/billing-prod");
  };

  publishSelect = (value) => {
    const {
      publishFunc,
      areYouSureFunc,
      firstImage,
      secondImage,
      thirdImage,
      fourthImage,
      fifthImage,
      sixthImage,
      marketingImage,
      firstImageFile,
      secondImageFile,
      thirdImageFile,
      fourthImageFile,
      fifthImageFile,
      sixthImageFile,
      marketingImageFile,
      titleName,
      titleNumber,
      userName,
      category,
      businessType,
      marketingImageTitle,
      marketingImagePrice,
      firstImagePrice,
      firstImageTitle,
      secondImagePrice,
      secondImageTitle,
      thirdImagePrice,
      thirdImageTitle,
      fourthImagePrice,
      fourthImageTitle,
      fifthImagePrice,
      fifthImageTitle,
      sixthImagePrice,
      sixthImageTitle,
    } = this.props;

    if (
      titleName.length === 0 ||
      titleNumber.length === 0 ||
      userName.length === 0 ||
      category.length === 0 ||
      businessType.length === 0 ||
      marketingImageTitle.length === 0 ||
      marketingImagePrice.length === 0 ||
      firstImagePrice.length === 0 ||
      firstImageTitle.length === 0 ||
      secondImagePrice.length === 0 ||
      secondImageTitle.length === 0 ||
      thirdImagePrice.length === 0 ||
      thirdImageTitle.length === 0 ||
      fourthImagePrice.length === 0 ||
      fourthImageTitle.length === 0 ||
      fifthImagePrice.length === 0 ||
      fifthImageTitle.length === 0 ||
      sixthImagePrice.length === 0 ||
      sixthImageTitle.length === 0
    ) {
      return this.setState({
        errorImages: true,
      });
    }

    if (
      firstImage.length === 0 ||
      secondImage.length === 0 ||
      thirdImage.length === 0 ||
      fourthImage.length === 0 ||
      fifthImage.length === 0 ||
      sixthImage.length === 0 ||
      marketingImage.length === 0
    ) {
      return this.setState({
        errorImages: true,
      });
    }

    if (
      firstImageFile === null ||
      secondImageFile === null ||
      thirdImageFile === null ||
      fourthImageFile === null ||
      fifthImageFile === null ||
      sixthImageFile === null ||
      marketingImageFile === null
    ) {
      return this.setState({
        errorImages: true,
      });
    }

    if (value === false) {
      areYouSureFunc(false);
      publishFunc(false);
      return this.setState({
        errorImages: false,
      });
    }

    if (value === true) {
      areYouSureFunc(true);
      publishFunc(true);
      return this.setState({
        errorImages: false,
      });
    }
  };

  areYouSureSelect = (value) => {
    const { areYouSureFunc, publishFunc, updateUserFunc, updateData, email } =
      this.props;

    if (value === true) {
      areYouSureFunc(true);
      publishFunc(false);
      updateUserFunc(updateData, email);
    }
  };

  goBackToEditor = () => {
    const { areYouSureFunc, publishFunc } = this.props;
    publishFunc(false);
    areYouSureFunc(false);
  };

  goToChangeCategory = () => {
    this.props.history.push("/change-category-prod");
  };

  render() {
    const { errorImages } = this.state;
    const {
      publish,
      are_you_sure,
      firstBadgeColors,
      titleColor,
      titleName,
      titleNumber,
      marketingImage,
      firstImage,
      secondImage,
      thirdImage,
      fourthImage,
      fifthImage,
      sixthImage,
      marketingImageTitle,
      firstImagePrice,
      firstImageTitle,
      secondImagePrice,
      secondImageTitle,
      thirdImagePrice,
      thirdImageTitle,
      fourthImagePrice,
      fourthImageTitle,
      fifthImagePrice,
      fifthImageTitle,
      sixthImagePrice,
      sixthImageTitle,
      businessType,
      selectedUser,
      userName,
      marketingImagePrice,
      category,
      loading,
    } = this.props;

    if (loading) {
      return (
        <div style={{ padding: "50px" }}>
          <h2
            style={{
              color: titleColor,
              textAlign: "center",
              fontSize: "3rem",
            }}
          >
            ...Submitting
          </h2>
        </div>
      );
    }

    if (publish === true) {
      return (
        <div style={{ padding: "50px" }}>
          <h2
            style={{
              color: titleColor,
              textAlign: "center",
              fontSize: "3rem",
            }}
          >
            Are you sure you want to publish your website into the internet?
          </h2>

          <div className="flex-box-go-back-demo">
            <button
              className="go-back"
              onClick={this.areYouSureSelect.bind(this, true)}
            >
              {" "}
              Yes
            </button>
            <button
              className="no-selection"
              onClick={this.publishSelect.bind(this, false)}
            >
              {" "}
              No
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="Cards">
        {publish === false && are_you_sure === true ? (
          <div className="flex-box-go-back-demo">
            <button className="go-back" onClick={this.goBackToEditor}>
              {" "}
              Editor
            </button>
          </div>
        ) : (
          <div className="flex-box-go-back-demo">
            <button className="subscription" onClick={this.goToBilling}>
              {" "}
              Billing
            </button>
            <button className="go-back" onClick={this.goBackToHome}>
              {" "}
              Log out
            </button>
            <button
              className="publish"
              onClick={this.publishSelect.bind(this, true)}
            >
              {" "}
              Publish
            </button>
            <button className="dashboard-button" onClick={this.goToDashboard}>
              {" "}
              {businessType === "sales" ? "Orders" : "Meetings"}{" "}
            </button>
          </div>
        )}

        {errorImages === true ? (
          <h2
            style={{
              color: titleColor,
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            You need to have all 7 images filled to publish into the internet,
            if you already have images in the squares you need to add all 7 of
            them again like the first time you edited your website in order to
            make this change. <br /> You have to make sure all fields are filled
            and that you have selected a business type and category.
          </h2>
        ) : null}

        {are_you_sure === false ? (
          <h2
            style={{
              color: titleColor,
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Scroll down to change images, text, and background color. <br />
            Click on publish once you are done editing to make your website live
            in the internet. <br />
          </h2>
        ) : null}

        <h2
          style={{
            color: titleColor,
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          {selectedUser === "user-one" ? titleName : null}
        </h2>
        <h2
          style={{
            color: titleColor,
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          {selectedUser === "user-one" ? titleNumber : null}
        </h2>

        <div className="Card-Flex-Box">
          {selectedUser === "user-one" ? (
            <div className="CardGroup">
              <CardProd
                title={firstImageTitle}
                text={
                  firstImage.length > 0
                    ? businessType === "sales"
                      ? "Click to order"
                      : "Click to schedule"
                    : null
                }
                image={
                  firstImage.length > 0
                    ? firstImage
                    : "http://localhost:5000/images/emptyimage.png"
                }
                price={firstImage.length > 0 ? `$ ${firstImagePrice}` : ""}
                disabledClick={false}
              />
              <CardProd
                title={secondImageTitle}
                text={
                  secondImage.length > 0
                    ? businessType === "sales"
                      ? "Click to order"
                      : "Click to schedule"
                    : null
                }
                image={
                  secondImage.length > 0
                    ? secondImage
                    : "http://localhost:5000/images/emptyimage.png"
                }
                price={secondImage.length > 0 ? `$ ${secondImagePrice}` : ""}
                disabledClick={false}
              />
              <CardProd
                title={thirdImageTitle}
                text={
                  thirdImage.length > 0
                    ? businessType === "sales"
                      ? "Click to order"
                      : "Click to schedule"
                    : null
                }
                image={
                  thirdImage.length > 0
                    ? thirdImage
                    : "http://localhost:5000/images/emptyimage.png"
                }
                price={thirdImage.length > 0 ? `$ ${thirdImagePrice}` : ""}
                disabledClick={false}
              />
              <CardProd
                title={fourthImageTitle}
                text={
                  fourthImage.length > 0
                    ? businessType === "sales"
                      ? "Click to order"
                      : "Click to schedule"
                    : null
                }
                image={
                  fourthImage.length > 0
                    ? fourthImage
                    : "http://localhost:5000/images/emptyimage.png"
                }
                price={fourthImage.length > 0 ? `$ ${fourthImagePrice}` : ""}
                disabledClick={false}
              />
              <CardProd
                title={fifthImageTitle}
                text={
                  fifthImage.length > 0
                    ? businessType === "sales"
                      ? "Click to order"
                      : "Click to schedule"
                    : null
                }
                image={
                  fifthImage.length > 0
                    ? fifthImage
                    : "http://localhost:5000/images/emptyimage.png"
                }
                price={fifthImage.length > 0 ? `$ ${fifthImagePrice}` : ""}
                disabledClick={false}
              />
              <CardProd
                title={sixthImageTitle}
                text={
                  sixthImage.length > 0
                    ? businessType === "sales"
                      ? "Click to order"
                      : "Click to schedule"
                    : null
                }
                image={
                  sixthImage.length > 0
                    ? sixthImage
                    : "http://localhost:5000/images/emptyimage.png"
                }
                price={sixthImage.length > 0 ? `$ ${sixthImagePrice}` : ""}
                disabledClick={false}
              />
            </div>
          ) : null}
        </div>
        {selectedUser === "user-one" && are_you_sure === false ? (
          <div>
            <div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change Name of Business
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="name-business"
                  placeholder="Enter your business name"
                  className="input-style"
                  onChange={this.selectTitle}
                  value={titleName}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change Number of Business
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="number-business"
                  placeholder="Enter your business number"
                  className="input-style"
                  onChange={this.selectNumber}
                  value={titleNumber}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change Type of Business
              </h2>
              <div className="options-business">
                <button
                  className="go-back"
                  onClick={this.selectBusinessType.bind(this, "sales")}
                >
                  {" "}
                  Sales
                </button>
                <button
                  className="meetings-button"
                  onClick={this.selectBusinessType.bind(this, "meetings")}
                >
                  {" "}
                  Meetings
                </button>
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change Category
              </h2>
              <h4
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "2rem",
                }}
              >
                {category}
              </h4>
              <div className="options-business">
                <button
                  className="select-category"
                  onClick={this.goToChangeCategory}
                >
                  {" "}
                  Category
                </button>
              </div>

              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change user name
              </h2>
              <h4
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "2rem",
                }}
              >
                {userName}
              </h4>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter new username"
                  className="input-style"
                  onChange={this.selectUserName}
                  value={userName}
                />
              </div>

              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Pick title color
              </h2>
              <div className="color-grid">
                {firstBadgeColors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        background: color,
                        width: "5rem",
                        height: "5rem",
                        cursor: "pointer",
                      }}
                      onClick={this.changeColorTitle.bind(this, color)}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Pick background colors
              </h2>
            </div>
            <div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                First Color
              </h2>
              <div className="color-grid">
                {firstBadgeColors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        background: color,
                        width: "5rem",
                        height: "5rem",
                        cursor: "pointer",
                      }}
                      onClick={this.changeFirstColorBackgroundStyle.bind(
                        this,
                        color
                      )}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Second Color
              </h2>
              <div className="color-grid">
                {firstBadgeColors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        background: color,
                        width: "5rem",
                        height: "5rem",
                        cursor: "pointer",
                      }}
                      onClick={this.changeSecondColorBackgroundStyle.bind(
                        this,
                        color
                      )}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardProd
                  title={marketingImageTitle}
                  text={
                    marketingImage.length > 0
                      ? businessType === "sales"
                        ? "Click to open website"
                        : ""
                      : null
                  }
                  image={
                    marketingImage.length > 0
                      ? marketingImage
                      : "http://localhost:5000/images/emptyimage.png"
                  }
                  price={marketingImagePrice}
                  disabledClick={true}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change Marketing Wall Image
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="file"
                  id="avatar"
                  name="image-one"
                  accept="image/png, image/jpeg"
                  onChange={this.selectMarketingWallImage}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change marketing wall image title
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="title-one"
                  placeholder="Enter image name"
                  className="input-style"
                  onChange={this.selectMarketingImageTitle}
                  value={marketingImageTitle}
                />
              </div>{" "}
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change marketing wall image message
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="title-two"
                  placeholder="Enter image message"
                  className="input-style"
                  onChange={this.selectMarketingPriceTitle}
                  value={marketingImagePrice}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change first image
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="file"
                  id="avatar"
                  name="image-one"
                  accept="image/png, image/jpeg"
                  onChange={this.selectFirstFiles}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change first image title
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="title-one"
                  placeholder="Enter your name"
                  className="input-style"
                  onChange={this.selectFirstImageTitle}
                  value={firstImageTitle}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change first image price
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="number"
                  name="price-one"
                  placeholder="Enter your price"
                  className="input-style"
                  onChange={this.selectFirstImagePrice}
                  value={firstImagePrice}
                />
              </div>
            </div>
            <div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change second image
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="file"
                  id="avatar"
                  name="image-two"
                  accept="image/png, image/jpeg"
                  onChange={this.selectSecondFiles}
                />
              </div>
            </div>
            <h2
              style={{
                color: titleColor,
                textAlign: "center",
                fontSize: "3rem",
              }}
            >
              Change second image title
            </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="text"
                name="title-two"
                placeholder="Enter your name"
                className="input-style"
                onChange={this.selectSecondImageTitle}
                value={secondImageTitle}
              />
            </div>
            <h2
              style={{
                color: titleColor,
                textAlign: "center",
                fontSize: "3rem",
              }}
            >
              Change second image price
            </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="number"
                name="price-two"
                placeholder="Enter your price"
                className="input-style"
                onChange={this.selectSecondImagePrice}
                value={secondImagePrice}
              />
            </div>
            <div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change third image
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="file"
                  id="avatar"
                  name="image-three"
                  accept="image/png, image/jpeg"
                  onChange={this.selectThirdFiles}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change third image title
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="title-three"
                  placeholder="Enter your name"
                  className="input-style"
                  onChange={this.selectThirdImageTitle}
                  value={thirdImageTitle}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change third image price
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="number"
                  name="price-three"
                  placeholder="Enter your price"
                  className="input-style"
                  onChange={this.selectThirdImagePrice}
                  value={thirdImagePrice}
                />
              </div>
            </div>
            <div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change fourth image
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="file"
                  id="avatar"
                  name="image-four"
                  accept="image/png, image/jpeg"
                  onChange={this.selectFourthFiles}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change fourth image title
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="title-four"
                  placeholder="Enter your name"
                  className="input-style"
                  onChange={this.selectFourthImageTitle}
                  value={fourthImageTitle}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change fourth image price
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="number"
                  name="price-four"
                  placeholder="Enter your price"
                  className="input-style"
                  onChange={this.selectFourthImagePrice}
                  value={fourthImagePrice}
                />
              </div>
            </div>
            <div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change fifth image
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="file"
                  id="avatar"
                  name="image-five"
                  accept="image/png, image/jpeg"
                  onChange={this.selectFifthFiles}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change fifth image title
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="title-five"
                  placeholder="Enter your name"
                  className="input-style"
                  onChange={this.selectFifthImageTitle}
                  value={fifthImageTitle}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change fifth image price
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="number"
                  name="price-five"
                  placeholder="Enter your price"
                  className="input-style"
                  onChange={this.selectFifthImagePrice}
                  value={fifthImagePrice}
                />
              </div>
            </div>
            <div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change sixth image
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="file"
                  id="avatar"
                  name="image-six"
                  accept="image/png, image/jpeg"
                  onChange={this.selectSixthFiles}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change sixth image title
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  name="title-six"
                  placeholder="Enter your name"
                  className="input-style"
                  onChange={this.selectSixthImageTitle}
                  value={sixthImageTitle}
                />
              </div>
              <h2
                style={{
                  color: titleColor,
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                Change sixth image price
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <input
                  type="number"
                  name="price-six"
                  placeholder="Enter your price"
                  className="input-style"
                  onChange={this.selectSixthImagePrice}
                  value={sixthImagePrice}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    firstBadgeColors: state.editorReducerProd.firstBadgeColors,
    titleColor: state.editorReducerProd.titleColor,
    titleName: state.editorReducerProd.titleName,
    titleNumber: state.editorReducerProd.titleNumber,
    firstColor: state.editorReducerProd.firstColor,
    secondColor: state.editorReducerProd.secondColor,
    marketingImage: state.editorReducerProd.marketingImage,
    marketingImageFile: state.editorReducerProd.marketingImageFile,
    marketingImagePrice: state.editorReducerProd.marketingImagePrice,
    marketingImageTitle: state.editorReducerProd.marketingImageTitle,
    firstImage: state.editorReducerProd.firstImage,
    firstImageFile: state.editorReducerProd.firstImageFile,
    firstImagePrice: state.editorReducerProd.firstImagePrice,
    firstImageTitle: state.editorReducerProd.firstImageTitle,
    secondImage: state.editorReducerProd.secondImage,
    secondImageFile: state.editorReducerProd.secondImageFile,
    secondImagePrice: state.editorReducerProd.secondImagePrice,
    secondImageTitle: state.editorReducerProd.secondImageTitle,
    thirdImage: state.editorReducerProd.thirdImage,
    thirdImageFile: state.editorReducerProd.thirdImageFile,
    thirdImagePrice: state.editorReducerProd.thirdImagePrice,
    thirdImageTitle: state.editorReducerProd.thirdImageTitle,
    fourthImage: state.editorReducerProd.fourthImage,
    fourthImageFile: state.editorReducerProd.fourthImageFile,
    fourthImagePrice: state.editorReducerProd.fourthImagePrice,
    fourthImageTitle: state.editorReducerProd.fourthImageTitle,
    fifthImage: state.editorReducerProd.fifthImage,
    fifthImageFile: state.editorReducerProd.fifthImageFile,
    fifthImagePrice: state.editorReducerProd.fifthImagePrice,
    fifthImageTitle: state.editorReducerProd.fifthImageTitle,
    sixthImage: state.editorReducerProd.sixthImage,
    sixthImageFile: state.editorReducerProd.sixthImageFile,
    sixthImagePrice: state.editorReducerProd.sixthImagePrice,
    sixthImageTitle: state.editorReducerProd.sixthImageTitle,
    businessType: state.editorReducerProd.businessType,
    selectedUser: state.editorReducerProd.selectedUser,
    publish: state.editorReducerProd.publish,
    are_you_sure: state.editorReducerProd.are_you_sure,
    userName: state.editorReducerProd.userName,
    category: state.editorReducerProd.category,
    loading: state.editorReducerProd.loading,
    updateData: state.editorReducerProd,
    email: state.editorReducerProd.email,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeColorOfTitle: bindActionCreators(changeTitleColorProd, dispatch),
    changeColorOfBackroundFirstColor: bindActionCreators(
      changeFirstColorProd,
      dispatch
    ),
    changeColorOfBackroundSecondColor: bindActionCreators(
      changeSecondColorProd,
      dispatch
    ),
    changeMarketingImageSelect: bindActionCreators(
      changeMarketingImageProd,
      dispatch
    ),
    changeFirstImageSelect: bindActionCreators(changeFirstImageProd, dispatch),
    changeSecondImageSelect: bindActionCreators(
      changeSecondImageProd,
      dispatch
    ),
    changeThirdImageSelect: bindActionCreators(changeThirdImageProd, dispatch),
    changeFourthImageSelect: bindActionCreators(
      changeFourthImageProd,
      dispatch
    ),
    changeFifthImageSelect: bindActionCreators(changeFifthImageProd, dispatch),
    changeSixthImageSelect: bindActionCreators(changeSixthImageProd, dispatch),
    changeFirstImageSelectPrice: bindActionCreators(
      changeFirstImagePriceProd,
      dispatch
    ),
    changeMarketingImageSelectPrice: bindActionCreators(
      changeMarketingImagePriceProd,
      dispatch
    ),
    changeSecondImageSelectPrice: bindActionCreators(
      changeSecondImagePriceProd,
      dispatch
    ),
    changeThirdImageSelectPrice: bindActionCreators(
      changeThirdImagePriceProd,
      dispatch
    ),
    changeFourthImageSelectPrice: bindActionCreators(
      changeFourthImagePriceProd,
      dispatch
    ),
    changeFifthImageSelectPrice: bindActionCreators(
      changeFifthImagePriceProd,
      dispatch
    ),
    changeSixthImageSelectPrice: bindActionCreators(
      changeSixthImagePriceProd,
      dispatch
    ),
    changeMarketingImageSelectTitle: bindActionCreators(
      changeMarketingImageTitleProd,
      dispatch
    ),
    changeFirstImageSelectTitle: bindActionCreators(
      changeFirstImageTitleProd,
      dispatch
    ),
    changeSecondImageSelectTitle: bindActionCreators(
      changeSecondImageTitleProd,
      dispatch
    ),
    changeThirdImageSelectTitle: bindActionCreators(
      changeThirdImageTitleProd,
      dispatch
    ),
    changeFourthImageSelectTitle: bindActionCreators(
      changeFourthImageTitleProd,
      dispatch
    ),
    changeFifthImageSelectTitle: bindActionCreators(
      changeFifthImageTitleProd,
      dispatch
    ),
    changeSixthImageSelectTitle: bindActionCreators(
      changeSixthImageTitleProd,
      dispatch
    ),
    changeUserNameSelect: bindActionCreators(changeUserNameProd, dispatch),
    changeTitleBusinessSelect: bindActionCreators(
      changeTitleNameProd,
      dispatch
    ),
    changeNumberBusinessSelect: bindActionCreators(
      changeTitleNumberProd,
      dispatch
    ),
    changeTypeBusinessSelect: bindActionCreators(
      changeBusinessTypeProd,
      dispatch
    ),
    changeSelectedUserSite: bindActionCreators(selectUserWebsiteProd, dispatch),
    publishFunc: bindActionCreators(publishProd, dispatch),
    areYouSureFunc: bindActionCreators(areYouSureProd, dispatch),
    resetLoginFunc: bindActionCreators(resetLogin, dispatch),
    resetEditorFunc: bindActionCreators(resetEditor, dispatch),
    updateUserFunc: bindActionCreators(updateUser, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditorPage)
);
