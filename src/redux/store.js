import { createStore,combineReducers } from "redux";

// Reducers importation
import articlesTagsFilteringReducer from "./reducers/articlesTagsFilteringReducer";
import tutoReducer from "./reducers/tutoReducer";

const rootReducer = combineReducers({
  tutoReducer,
  articlesTagsFilteringReducer
})

const store = createStore(rootReducer);

export default store;