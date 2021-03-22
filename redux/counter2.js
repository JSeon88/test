import { createStore } from "./newStore.js";

const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const increase = () => ({
  key: "INCREASE",
  type: INCREASE,
  payload: 5,
});
const decrease = () => ({
  key: "DECREASE",
  type: DECREASE,
});

const initialState = {
  a: {
    counter: 0,
    b: 0,
  },
  counter: 0,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.payload,
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
  console.log("aaaaaaa");
  const state = store.getState();
  counter.innerText = state.counter;
};

const unsubscribe = store.subscribe(["INCREASE", "DECREASE"], render);

store.subscribe(["INCREASE", "DECREASE"], render)();

unsubscribe();
btnIncrease.onclick = () => {
  store.dispatch(increase());
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
