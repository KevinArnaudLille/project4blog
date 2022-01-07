import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers importation
import articlesTagsFilteringReducer from "./reducers/articlesTagsFilteringReducer";
import articlesDbReducer from "./reducers/articlesDbReducer";

const rootReducer = combineReducers({
  articlesDbReducer,
  articlesTagsFilteringReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;