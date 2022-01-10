import { createStore, combineReducers, applyMiddleware } from "redux";

// Thunk module importation for data request from firebase
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