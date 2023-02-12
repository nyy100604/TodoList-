import { Middleware } from "redux";
import { RootState } from "./store";

export const loggerMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (store) => (nextDispatch) => (action) => {
  console.log("dispatching", action);
  let result = nextDispatch(action);
  console.log(result);
  console.log("next state", store.getState());
  return result;
};

export const weiMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (store) => (nextDispatch) => (action) => {
  console.log("dispatching wei");
  let result = nextDispatch(action);
  console.log("after dispatching wei");
  console.log("next state", store.getState());
  return result;
};
