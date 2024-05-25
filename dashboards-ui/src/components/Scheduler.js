import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { addOrder } from "../redux/actions/ordersActions";

class Scheduler extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      lastName: "",
      error:
        "You need to enter your first name, last name, phone number, address, and email.",
      formError: false,
      phoneNumber: "",
    };
  }

  routeToRoot = () => {
    this.props.history.push("/demo");
  };

  confirmOrder = () => {
    const { name, lastName, phoneNumber, email } = this.state;

    const { history, addOrderToList, title } = this.props;

    if (name.length == 0) {
      this.setState({
        formError: true,
      });
      return null;
    }

    if (lastName.length == 0) {
      this.setState({
        formError: true,
      });
      return null;
    }

    if (phoneNumber.length == 0) {
      this.setState({
        formError: true,
      });
      return null;
    }

    if (email.length == 0) {
      this.setState({
        formError: true,
      });
      return null;
    }

    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    addOrderToList({
      name,
      lastName,
      id: Math.floor(100000 + Math.random() * 900000),
      time: dateTime,
      type: title,
      phoneNumber,
      email,
    });

    history.push("/confirmation-order");
  };

  setValue = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      this.setState({
        name: value,
        formError: false,
      });
    }
    if (name === "lastName") {
      this.setState({
        lastName: value,
        formError: false,
      });
    }
    if (name === "phoneNumber") {
      this.setState({
        phoneNumber: value,
        formError: false,
      });
    }

    if (name === "email") {
      this.setState({
        email: value,
        formError: false,
      });
    }
  };

  render() {
    const { titleColor, text, title, price, image } = this.props;
    const { name, lastName, phoneNumber, email, formError, error } = this.state;
    return (
      <div>
        <div className="flexbox-one">
          <button className="go-back" onClick={this.routeToRoot}>
            {" "}
            Go Back
          </button>
        </div>

        <div className="flexbox-two">
          <div className="Card card-display" onClick={this.confirmOrder}>
            <img src={image} alt={title} className="card-display-width" />
            <h3>{title}</h3>
            <h3>{price}</h3>
            <h3 className="font-display-image">{text}</h3>
          </div>
        </div>
        <div className="flexbox-three">
          {formError ? (
            <p className="error-message-order-suit">{error}</p>
          ) : null}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input-style"
            onChange={this.setValue}
            value={name}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            className="input-style"
            onChange={this.setValue}
            value={lastName}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            className="input-style"
            onChange={this.setValue}
            value={phoneNumber}
          />

          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="input-style"
            onChange={this.setValue}
            value={email}
            style={{ marginBottom: "1rem" }}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    titleColor: state.editorReducerDemo.titleColor,
    text: state.ordersReducer.orderType.text,
    image: state.ordersReducer.orderType.image,
    title: state.ordersReducer.orderType.title,
    price: state.ordersReducer.orderType.price,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addOrderToList: (name, lastName, id, time, type, phoneNumber, email) =>
      dispatch(addOrder(name, lastName, id, time, type, phoneNumber, email)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Scheduler)
);
