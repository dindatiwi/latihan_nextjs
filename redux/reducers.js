import { combineReducers } from "redux";

import ExampleReducer from "./reducer/example";

const rootReducer = combineReducers({
  example: ExampleReducer,
});

export default rootReducer;
