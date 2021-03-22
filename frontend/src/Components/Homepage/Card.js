import React from "react";
import "./Css/Card.css";
const Card = (props) => {
  return (
    <div className="Card_container">
      <div className="card" id="Card">
        <img src={props.data.image} alt="/" />
        <div className="card-body" id="cardBody1">
          <span href="/">{props.data.title}</span>
          <p className="card-text">{props.data.para}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
