import { createStore,combineReducers } from "redux";

// Reducers importation
import articlesTagsFilteringReducer from "./reducers/articlesTagsFilteringReducer";
import tutoReducer from "./reducers/tutoReducer";
import scrollYStoreReducer from "./reducers/scrollYStoreReducer";

const rootReducer = combineReducers({
  tutoReducer,
  articlesTagsFilteringReducer,
  scrollYStoreReducer
})

const store = createStore(rootReducer);

export default store;