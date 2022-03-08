import React from "react";
import "./Card.css";

import iconMusic from "./assets/images/icon-music.svg";

const Card = () => {
  return (
    <div className="orderbox">
      <img src={"./assets/images/illustration-hero.svg"} alt="" />
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="pricebox">
        <div className="pricebox-icon">
          <img src={iconMusic} alt="Price Amount" />
        </div>
        <div>
          <span className="text-bold">Annual Plan</span>
          <br />
          $59.99/year
        </div>
        <div className="pricebox-change">
          <a href="#">Change</a>
        </div>
      </div>

      <button className="proceed-btn">
        <a href="#">Proceed to Payment</a>
      </button>

      <button className="cancel-btn">
        <a href="#">Cancel Order</a>
      </button>
    </div>
  );
};

export default Card;
