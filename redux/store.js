const Store = function () {
  this.state = undefined;
  this.collection = [];
};

const store = new Store();

export function createStore(reducer) {
  // const Store = {
  //   state: {},
  //   collection: [],
  // };
  // const store = new Store();

  // state 반환
  const getState = () => {
    return store.state;
  };

  // 구독 등록
  const subscribe = (fn) => {
    store.collection.push(fn);
    return () => {
      console.log("delete ", fn);
    };
  };

  // 액션 함수
  const dispatch = (...args) => {
    store.state = reducer(store.state, ...args);
    // store.collection 호출
    store.collection.forEach((element) => {
      // 콜백 실행
      element();
    });
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export default Store;
