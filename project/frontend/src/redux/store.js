import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

import {articlesReducer} from "./reducers/articles";

let store = createStore(
    combineReducers({
        articles: articlesReducer
    }),
    applyMiddleware(thunk)
)

export default store
