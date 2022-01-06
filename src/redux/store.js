import { createStore,combineReducers } from "redux";

// Reducers importation
import articlesTagsFilteringReducer from "./reducers/articlesTagsFilteringReducer";
import articlesDbReducer from "./reducers/articlesDbReducer";
import scrollYStoreReducer from "./reducers/scrollYStoreReducer";

const rootReducer = combineReducers({
  articlesDbReducer,
  articlesTagsFilteringReducer,
  scrollYStoreReducer
})

const store = createStore(rootReducer);

export default store;