import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardHolder from "../components/CardHolder";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="container">
      <h1>E-wallet</h1>
      <h4>Active card</h4>
      <div>
        <Card
          vendor={cards[activeCard].vendor}
          cardNumber={cards[activeCard].cardNumber}
          cardHolder={cards[activeCard].cardHolder}
          expireMonth={cards[activeCard].expireMonth}
          expireYear={cards[activeCard].expireYear}
          cvc={cards[activeCard].ccv}
          setActiveCard={setActiveCard}
          index={activeCard}
        />
      </div>
      <h4>Your cards</h4>
      {cards.map((card, index) => {
        return (
          <Card
            vendor={card.vendor}
            cardNumber={card.cardNumber}
            cardHolder={card.cardHolder}
            expireMonth={card.expireMonth}
            expireYear={card.expireYear}
            cvc={card.ccv}
            setActiveCard={setActiveCard}
            index={index}
            key={index}
          />
        );
      })}
      <Link to={"/addcard"}>
        <button className="btn btn-primary">Add Card</button>
      </Link>
    </div>
  );
};

export default Home;
