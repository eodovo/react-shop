import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  // initialState: "kim",
  initialState: {
    name: "kim",
    age: 20,
  },
  reducers: {
    changeName(state) {
      state.name = "pack";
    },
  },
  aded(state) {
    state.age += 1;
  },
});

export let { changeName } = user.actions;
export let { aded } = user.actions;
//user.actions = state 변경 함수들이 남음. 구조분해할당 문법 사용

let cart = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    increase(state, actions) {
      let id = state.findIndex((a) => a.id === actions.payload);
      state[id].count++;
    },
    decrease(state, actions) {
      let id = state.findIndex((a) => a.id === actions.payload);
      state[id].count--;
      if (state[id].count === 0) {
        alert("한 판 이하는 불가능해요!");
        return false;
      }
    },

    addItem(state, actions) {
      let id = state.findIndex((a) => a.id === actions.payload.id);

      if (id >= 0) {
        state[id].count++;
      } else if (id <= -1) {
        state.push(actions.payload);
      }
    },
    deleteItem(state, actions) {
      let copy = [...state];
      const data = copy.filter((data) => {
        return data.id !== actions.payload;
      });
      return data;
    },
  },
});
export let { increase, addItem, decrease, deleteItem } = cart.actions;
export default configureStore({
  reducer: {
    cart: cart.reducer,
    user: user.reducer,
  },
});
