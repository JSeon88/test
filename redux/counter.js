import { createStore } from "./store.js";

const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const increase = () => ({
  type: INCREASE,
});
const decrease = () => ({ type: DECREASE });

const initialState = {
  counter: 0,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  counter.innerText = state.counter;
};

store.subscribe(render);

btnIncrease.onclick = () => {
  store.dispatch(increase());
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
