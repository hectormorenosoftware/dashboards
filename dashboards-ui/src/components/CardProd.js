import React from "react";
import { withRouter } from "react-router-dom";
import "./CardProd.css";

function CardProd(props) {
  const { image, title, price, text, style } = props;

  return (
    <div className="Card-Prod">
      <img src={image} alt={title} style={style} />
      <h3>{title}</h3>
      <h3>{price}</h3>
      <h3 className="card-text-alignment">{text}</h3>
    </div>
  );
}

export default withRouter(CardProd);
