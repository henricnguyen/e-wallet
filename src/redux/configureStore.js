import { createStore, combineReducers } from "redux";
import CardReducer from "./ducks/cards";

const reducer = combineReducers({
  cards: CardReducer,
});

const store = createStore(reducer);

export default store;
