const Store = function () {
  this.state = undefined;
  this.collection = {};
};

const store = new Store();

export function createStore(reducer) {
  // state 반환
  const getState = () => {
    return store.state;
  };

  // 구독 등록
  const subscribe = (keys, fn) => {
    const newFn = () => fn();
    keys.forEach((key) => {
      if (!store.collection.hasOwnProperty(key)) {
        store.collection[key] = [];
      }
      store.collection[key].push(newFn);
    });
    return () => {
      console.log("aaaaaaaaa");
      keys.forEach((key) => {
        store.collection[key] = store.collection[key].filter((data) => {
          return data !== newFn;
        });
        if (store.collection[key].length === 0) {
          delete store.collection[key];
        }
      });
    };
  };

  // 액션 함수
  const dispatch = (action) => {
    if (!store.collection[action.key]) {
      return;
    }
    store.state = reducer(store.state, action);
    // store.collection 호출
    store.collection[action.key].forEach((element) => {
      //console.log(element);
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
