import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { addOrderType } from "../redux/actions/ordersActions";
import "./Card.css";

function Card(props) {
  const { image, title, price, history, text, style, disabledClick } = props;
  const dispatch = useDispatch();

  const routeToScheduler = () => {
    if (disabledClick === true) {
      return null;
    }

    history.push("/scheduler");

    dispatch(
      addOrderType({
        phoneNumber: "",
        address: "",
        email: "",
        price,
        image,
        title,
        text: "Click this image once you are done entering your details.",
      })
    );
  };

  return (
    <div className="Card" onClick={routeToScheduler}>
      <img src={image} alt={title} style={style} />
      <h3>{title}</h3>
      <h3>{price}</h3>
      <h3 className="card-text-alignment">{text}</h3>
    </div>
  );
}

export default withRouter(Card);
