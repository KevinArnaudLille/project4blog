import { createStore,combineReducers } from "redux";

import tutoReducer from "./reducers/tutoReducer";

const rootReducer = combineReducers({
  tutoReducer
})

const store = createStore(rootReducer);

export default store;