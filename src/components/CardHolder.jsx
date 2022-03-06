import React from "react";
import Card from "./Card";

const CardHolder = ({ cards }) => {
  return (
    <div>
      <h2>Your cards</h2>
      {cards.map((card, index) => {
        return (
          <Card
            vendor={card.vendor}
            cardNumber={card.cardNumber}
            cardHolder={card.cardHolder}
            expireMonth={card.expireMonth}
            expireYear={card.expireYear}
            cvc={card.ccv}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CardHolder;
