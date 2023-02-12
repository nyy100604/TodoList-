import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  todoList: Array<string>;
};

const initialState: initialState = {
  todoList: [],
};

//幫助產生reducer, action, state
export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  //1.state -> 當下的狀態
  //2.action ->對應的動作
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    addTimestamp: (state) => {
      state.todoList.push(Date.now().toString());
    },
  },
});

export const { addTodo, addTimestamp } = todoSlice.actions;
export default todoSlice.reducer;
