import React from "react";

const Card = ({
  vendor,
  cardNumber,
  cardHolder,
  expireMonth,
  expireYear,
  ccv,
  index,
  setActiveCard,
}) => {
  const formattedCardNumber = cardNumber
    .replace(/(\d{4})/g, "$1 ")
    .replace(/(^\s+|\s+$)/, "");

  const handleClick = () => {
    setActiveCard(index);
  };
  return (
    <div onClick={handleClick} className="card-container">
      <div className="card text-black bg-light mb-3">
        <div className="card-header">{vendor}</div>
        <div className="card-body">
          <h4 className="card-title">{formattedCardNumber}</h4>
          <div className="row">
            <div className="col-6">
              <small>Cardholder name</small>
              <p className="card-text">{cardHolder}</p>
            </div>
            <div className="col-6">
              <small>Valid thru</small>
              <p>
                {expireMonth} / {expireYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
