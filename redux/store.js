import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const listMiddleware = [thunk];
const middleware = applyMiddleware(...listMiddleware);

const persistConfig = persistReducer(
  {
    key: "root",
    storage: localStorage,
  },
  rootReducer
);

export const store = createStore(persistConfig, middleware);

export const persist = persistStore(store);
