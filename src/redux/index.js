import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger/src";
import photos from "./photos";
import comments from "./comments";

const logger = createLogger({
    diff: true,
    collapsed: true
})
const rootReducer = combineReducers({
    photos: photos,
    comments: comments
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;