// Actions
export const addCard = (card) => ({
  type: "addCard",
  payload: card,
});

// State

const initialState = {
  cards: [
    {
      vendor: "Mastercard",
      cardNumber: "1234567891011123",
      cardHolder: "Henric Nguyen",
      expireMonth: 12,
      expireYear: 2023,
      ccv: 123,
    },
  ],
};

// Reducer

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "addCard") {
    if (newState.cards.length < 4) {
      newState.cards.push(action.payload);
    } else alert("You cannot not add more cards. Maximum 4");
  }

  return newState;
};

export default reducer;
