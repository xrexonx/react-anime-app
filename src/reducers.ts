import { combineReducers } from "redux";
import animeReducer from "./anime/reducer";

const appReducers = {
    anime: animeReducer,
    // ...other reducers
};

export default combineReducers(appReducers);
