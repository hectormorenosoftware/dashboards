import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeTitleColor,
  changeFirstColor,
  changeSecondColor,
  changeFirstImage,
  changeSecondImage,
  changeThirdImage,
  changeFourthImage,
  changeFifthImage,
  changeSixthImage,
  changeFirstImagePrice,
  changeSecondImagePrice,
  changeThirdImagePrice,
  changeFourthImagePrice,
  changeFifthImagePrice,
  changeSixthImagePrice,
  changeFirstImageTitle,
  changeSecondImageTitle,
  changeThirdImageTitle,
  changeFourthImageTitle,
  changeFifthImageTitle,
  changeSixthImageTitle,
  changeTitleName,
  changeTitleNumber,
  changeBusinessType,
  selectUserWebsite,
  areYouSure,
  publish,
  changeMarketingImage,
  changeMarketingImagePrice,
  changeMarketingImageTitle,
  changeUserName,
} from "../redux/actions/editorDemoActions";

import Card from "./Card";

class DemoPage extends React.PureComponent {
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
    this.props.history.push("/");
  };

  goToDashboard = () => {
    this.props.history.push("/orders");
  };

  goToBilling = () => {
    this.props.history.push("/billing");
  };

  publishSelect = (value) => {
    const { publishFunc, areYouSureFunc } = this.props;

    if (value === false) {
      areYouSureFunc(false);
      publishFunc(false);
    }

    if (value === true) {
      areYouSureFunc(true);
      publishFunc(true);
    }
  };

  areYouSureSelect = (value) => {
    const { areYouSureFunc, publishFunc } = this.props;

    if (value === true) {
      areYouSureFunc(true);
      publishFunc(false);
    }
  };

  goBackToEditor = () => {
    const { areYouSureFunc, publishFunc } = this.props;
    publishFunc(false);
    areYouSureFunc(false);
  };

  goToChangeCategory = () => {
    this.props.history.push("/change-category");
  };

  render() {
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
    } = this.props;

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
              Go Back
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
        {are_you_sure === false ? (
          <h2
            style={{
              color: titleColor,
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Find new website ideas by clicking on a user. <br />
            Scroll down to change images, text, and background color. <br />
            You won't be able to see your website in the marketing wall until
            you have a subscription. <br />
            Click on publish to see how your website will look to your customers
            once you are done editing. <br />
          </h2>
        ) : null}
        {are_you_sure === false ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "2rem",
                cursor: "pointer",
              }}
              src={"http://localhost:5000/images/alexandra.jpeg"}
              alt="user-one"
              onClick={this.selectUserSiteType.bind(this, "user-one")}
            />
            <img
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "2rem",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              src={"http://localhost:5000/images/joana.jpeg"}
              alt="user-two"
              onClick={this.selectUserSiteType.bind(this, "user-two")}
            />
            <img
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "2rem",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              src={"http://localhost:5000/images/lauren.jpeg"}
              alt="user-three"
              onClick={this.selectUserSiteType.bind(this, "user-three")}
            />

            <img
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "2rem",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              src={"http://localhost:5000/images/ranel.jpeg"}
              alt="user-four"
              onClick={this.selectUserSiteType.bind(this, "user-four")}
            />
          </div>
        ) : null}
        <h2
          style={{
            color: titleColor,
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          {selectedUser === "user-one"
            ? titleName
            : selectedUser === "user-two"
            ? "Dona's Pastry"
            : selectedUser === "user-three"
            ? "Ashley's Laundry"
            : selectedUser === "user-four"
            ? "Jack's Burgers"
            : null}
        </h2>
        <h2
          style={{
            color: titleColor,
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          {selectedUser === "user-one"
            ? titleNumber
            : selectedUser === "user-two"
            ? "619-908-2834"
            : selectedUser === "user-three"
            ? "718-989-3747"
            : selectedUser === "user-four"
            ? "512-384-3848"
            : null}
        </h2>
        <div className="Card-Flex-Box">
          {selectedUser === "user-one" ? (
            <div className="CardGroup">
              <Card
                title={firstImageTitle}
                text={
                  businessType === "sales"
                    ? "Click to order"
                    : "Click to schedule"
                }
                image={
                  firstImage.length > 0
                    ? firstImage
                    : "http://localhost:5000/images/suitone.webp"
                }
                price={`$ ${firstImagePrice}`}
                disabledClick={false}
              />
              <Card
                title={secondImageTitle}
                text={
                  businessType === "sales"
                    ? "Click to order"
                    : "Click to schedule"
                }
                image={
                  secondImage.length > 0
                    ? secondImage
                    : "http://localhost:5000/images/suittwo.webp"
                }
                price={`$ ${secondImagePrice}`}
                disabledClick={false}
              />
              <Card
                title={thirdImageTitle}
                text={
                  businessType === "sales"
                    ? "Click to order"
                    : "Click to schedule"
                }
                image={
                  thirdImage.length > 0
                    ? thirdImage
                    : "http://localhost:5000/images/suitthree.webp"
                }
                price={`$ ${thirdImagePrice}`}
                disabledClick={false}
              />
              <Card
                title={fourthImageTitle}
                text={
                  businessType === "sales"
                    ? "Click to order"
                    : "Click to schedule"
                }
                image={
                  fourthImage.length > 0
                    ? fourthImage
                    : "http://localhost:5000/images/suitfour.webp"
                }
                price={`$ ${fourthImagePrice}`}
                disabledClick={false}
              />
              <Card
                title={fifthImageTitle}
                text={
                  businessType === "sales"
                    ? "Click to order"
                    : "Click to schedule"
                }
                image={
                  fifthImage.length > 0
                    ? fifthImage
                    : "http://localhost:5000/images/suitfive.webp"
                }
                price={`$ ${fifthImagePrice}`}
                disabledClick={false}
              />
              <Card
                title={sixthImageTitle}
                text={
                  businessType === "sales"
                    ? "Click to order"
                    : "Click to schedule"
                }
                image={
                  sixthImage.length > 0
                    ? sixthImage
                    : "http://localhost:5000/images/suitsix.webp"
                }
                price={`$ ${sixthImagePrice}`}
                disabledClick={false}
              />
            </div>
          ) : selectedUser === "user-two" ? (
            <div className="CardGroup">
              <Card
                title="Donut Box"
                text="Click to order"
                image={"http://localhost:5000/images/donuts.jpeg"}
                price="$35"
                disabledClick={false}
              />
              <Card
                title="Donut Box Super"
                text="Click to order"
                image={"http://localhost:5000/images/donuts2.jpeg"}
                price="$25"
                disabledClick={false}
              />
              <Card
                title="Sweet Cakes Supreme"
                text="Click to order"
                image={"http://localhost:5000/images/donuts3.jpeg"}
                price="$35"
                disabledClick={false}
              />
              <Card
                title="Jelly Donuts"
                text="Click to order"
                image={"http://localhost:5000/images/jellydonuts.jpeg"}
                price="$35"
                disabledClick={false}
              />
              <Card
                title="Tart"
                text="Click to order"
                image={"http://localhost:5000/images/tart.jpeg"}
                price="$45"
                disabledClick={false}
              />
              <Card
                title="Tart Supreme"
                text="Click to order"
                image={"http://localhost:5000/images/tart2.jpeg"}
                price="$55"
                disabledClick={false}
              />
            </div>
          ) : selectedUser === "user-three" ? (
            <div className="CardGroup">
              <Card
                title="Wash Clothes"
                text="Click to schedule"
                image={"http://localhost:5000/images/laundry.jpeg"}
                price="$60 per lb"
                disabledClick={false}
              />
              <Card
                title="Dry Clothes"
                text="Click to schedule"
                image={"http://localhost:5000/images/dryer.jpeg"}
                price="$40 per lb"
                disabledClick={false}
              />
              <Card
                title="Starching"
                text="Click to schedule"
                image={"http://localhost:5000/images/starching.jpeg"}
                price="$45 per lb"
                disabledClick={false}
              />
              <Card
                title="Iron"
                text="Click to schedule"
                image={"http://localhost:5000/images/iron.jpeg"}
                price="$35 per lb"
                disabledClick={false}
              />
              <Card
                title="Wash Sheets and Bed Quilt"
                text="Click to schedule"
                image={"http://localhost:5000/images/bed.jpeg"}
                price="$50 per set"
                disabledClick={false}
              />
              <Card
                title="Linting"
                text="Click to schedule"
                image={"http://localhost:5000/images/linting.jpeg"}
                price="$40 per lb"
                disabledClick={false}
              />
            </div>
          ) : selectedUser === "user-four" ? (
            <div className="CardGroup">
              <Card
                title="Burger with sweet potato fries"
                text="Click to order"
                image={"http://localhost:5000/images/baconburger.jpeg"}
                price="$25"
                disabledClick={false}
              />
              <Card
                title="Cheeseburger with fries"
                text="Click to order"
                image={
                  "http://localhost:5000/images/cheeseburgerwithfries.jpeg"
                }
                price="$25"
                disabledClick={false}
              />
              <Card
                title="Chicken Sandwich"
                text="Click to order"
                image={"http://localhost:5000/images/chickensandwich.jpeg"}
                price="$20"
                disabledClick={false}
              />
              <Card
                title="Double Cheeseburger"
                text="Click to order"
                image={"http://localhost:5000/images/doublecheeseburger.jpeg"}
                price="$20"
                disabledClick={false}
              />
              <Card
                title="Single Bacon Cheeseburger"
                text="Click to order"
                image={"http://localhost:5000/images/singlebaconburger.jpeg"}
                price="$20"
                disabledClick={false}
              />
              <Card
                title="Stacked Burger"
                text="Click to order"
                image={"http://localhost:5000/images/stackedburger.jpeg"}
                price="$40"
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
                <Card
                  title={marketingImageTitle}
                  text={"Click to open website"}
                  image={
                    marketingImage.length > 0
                      ? marketingImage
                      : " http://localhost:5000/images/suitone.webp"
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
    firstBadgeColors: state.editorReducerDemo.firstBadgeColors,
    titleColor: state.editorReducerDemo.titleColor,
    titleName: state.editorReducerDemo.titleName,
    titleNumber: state.editorReducerDemo.titleNumber,
    firstColor: state.editorReducerDemo.firstColor,
    secondColor: state.editorReducerDemo.secondColor,
    marketingImage: state.editorReducerDemo.marketingImage,
    marketingImagePrice: state.editorReducerDemo.marketingImagePrice,
    marketingImageTitle: state.editorReducerDemo.marketingImageTitle,
    firstImage: state.editorReducerDemo.firstImage,
    firstImagePrice: state.editorReducerDemo.firstImagePrice,
    firstImageTitle: state.editorReducerDemo.firstImageTitle,
    secondImage: state.editorReducerDemo.secondImage,
    secondImagePrice: state.editorReducerDemo.secondImagePrice,
    secondImageTitle: state.editorReducerDemo.secondImageTitle,
    thirdImage: state.editorReducerDemo.thirdImage,
    thirdImagePrice: state.editorReducerDemo.thirdImagePrice,
    thirdImageTitle: state.editorReducerDemo.thirdImageTitle,
    fourthImage: state.editorReducerDemo.fourthImage,
    fourthImagePrice: state.editorReducerDemo.fourthImagePrice,
    fourthImageTitle: state.editorReducerDemo.fourthImageTitle,
    fifthImage: state.editorReducerDemo.fifthImage,
    fifthImagePrice: state.editorReducerDemo.fifthImagePrice,
    fifthImageTitle: state.editorReducerDemo.fifthImageTitle,
    sixthImage: state.editorReducerDemo.sixthImage,
    sixthImagePrice: state.editorReducerDemo.sixthImagePrice,
    sixthImageTitle: state.editorReducerDemo.sixthImageTitle,
    businessType: state.editorReducerDemo.businessType,
    selectedUser: state.editorReducerDemo.selectedUser,
    publish: state.editorReducerDemo.publish,
    are_you_sure: state.editorReducerDemo.are_you_sure,
    userName: state.editorReducerDemo.userName,
    category: state.editorReducerDemo.category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeColorOfTitle: bindActionCreators(changeTitleColor, dispatch),
    changeColorOfBackroundFirstColor: bindActionCreators(
      changeFirstColor,
      dispatch
    ),
    changeColorOfBackroundSecondColor: bindActionCreators(
      changeSecondColor,
      dispatch
    ),
    changeMarketingImageSelect: bindActionCreators(
      changeMarketingImage,
      dispatch
    ),
    changeFirstImageSelect: bindActionCreators(changeFirstImage, dispatch),
    changeSecondImageSelect: bindActionCreators(changeSecondImage, dispatch),
    changeThirdImageSelect: bindActionCreators(changeThirdImage, dispatch),
    changeFourthImageSelect: bindActionCreators(changeFourthImage, dispatch),
    changeFifthImageSelect: bindActionCreators(changeFifthImage, dispatch),
    changeSixthImageSelect: bindActionCreators(changeSixthImage, dispatch),
    changeFirstImageSelectPrice: bindActionCreators(
      changeFirstImagePrice,
      dispatch
    ),
    changeMarketingImageSelectPrice: bindActionCreators(
      changeMarketingImagePrice,
      dispatch
    ),
    changeSecondImageSelectPrice: bindActionCreators(
      changeSecondImagePrice,
      dispatch
    ),
    changeThirdImageSelectPrice: bindActionCreators(
      changeThirdImagePrice,
      dispatch
    ),
    changeFourthImageSelectPrice: bindActionCreators(
      changeFourthImagePrice,
      dispatch
    ),
    changeFifthImageSelectPrice: bindActionCreators(
      changeFifthImagePrice,
      dispatch
    ),
    changeSixthImageSelectPrice: bindActionCreators(
      changeSixthImagePrice,
      dispatch
    ),
    changeMarketingImageSelectTitle: bindActionCreators(
      changeMarketingImageTitle,
      dispatch
    ),
    changeFirstImageSelectTitle: bindActionCreators(
      changeFirstImageTitle,
      dispatch
    ),
    changeSecondImageSelectTitle: bindActionCreators(
      changeSecondImageTitle,
      dispatch
    ),
    changeThirdImageSelectTitle: bindActionCreators(
      changeThirdImageTitle,
      dispatch
    ),
    changeFourthImageSelectTitle: bindActionCreators(
      changeFourthImageTitle,
      dispatch
    ),
    changeFifthImageSelectTitle: bindActionCreators(
      changeFifthImageTitle,
      dispatch
    ),
    changeSixthImageSelectTitle: bindActionCreators(
      changeSixthImageTitle,
      dispatch
    ),
    changeUserNameSelect: bindActionCreators(changeUserName, dispatch),
    changeTitleBusinessSelect: bindActionCreators(changeTitleName, dispatch),
    changeNumberBusinessSelect: bindActionCreators(changeTitleNumber, dispatch),
    changeTypeBusinessSelect: bindActionCreators(changeBusinessType, dispatch),
    changeSelectedUserSite: bindActionCreators(selectUserWebsite, dispatch),
    publishFunc: bindActionCreators(publish, dispatch),
    areYouSureFunc: bindActionCreators(areYouSure, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DemoPage)
);
