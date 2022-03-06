import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/ducks/cards";
import { useNavigate } from "react-router";

const AddCard = () => {
  const [cardNumber, setCardnumber] = useState(0);
  const [cardholderName, setCardholderName] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [ccv, setCcv] = useState(0);
  const [vendor, setVendor] = useState("Mastercard");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const card = {
      cardNumber: cardNumber,
      cardHolder: cardholderName,
      expireMonth: month,
      expireYear: year,
      ccv: ccv,
      vendor: vendor,
    };

    dispatch(addCard(card));

    navigate("/");
  };
  return (
    <div>
      <h1>Add a new bank card</h1>
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">{vendor}</div>
        <div className="card-body">
          <h5 className="card-title">{cardNumber}</h5>
          <div className="row">
            <div className="col-6">
              <small>Cardholder name</small>
              <p className="card-text">{cardholderName}</p>
            </div>
            <div className="col-6">
              <small>Valid thru</small>
              <p>
                {month} / {year}
              </p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardnumber">Card number</label>
          <input
            type="number"
            className="form-control"
            id="cardnumber"
            required
            onChange={(event) => setCardnumber(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardholder">Cardholder name</label>
          <input
            type="text"
            className="form-control"
            id="cardholder"
            required
            onChange={(event) => setCardholderName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardholder">Valid month</label>
          <input
            type="number"
            className="form-control"
            id="validmonth"
            required
            onChange={(event) => setMonth(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardholder">Valid year</label>
          <input
            type="number"
            className="form-control"
            id="validyear"
            required
            onChange={(event) => setYear(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardholder">CCV</label>
          <input
            type="number"
            className="form-control"
            id="ccv"
            required
            onChange={(event) => setCcv(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vendor">VENDOR</label>
          <select
            className="form-control"
            id="vendor"
            value={vendor}
            required
            onChange={(event) => setVendor(event.target.value)}
          >
            <option value="Mastercard">Mastercard</option>
            <option value="Visa">Visa</option>
            <option value="American Express">American Express</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          ADD CARD
        </button>
      </form>
    </div>
  );
};

export default AddCard;
