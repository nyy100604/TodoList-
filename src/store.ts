import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo";
import { loggerMiddleware, weiMiddleware } from "./middleware";
import { combineReducers } from "@reduxjs/toolkit";
import { todoApiService } from "./services/todoApi";

const reducers = combineReducers({
  todoReducer,
  [todoApiService.reducerPath]: todoApiService.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getCurrentMiddlewares) => {
    return (
      getCurrentMiddlewares()
        // .concat(loggerMiddleware)
        // .concat(weiMiddleware)
        .concat(todoApiService.middleware)
    );
  },
});
//判斷現在reduces現在的型態
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export default store;
