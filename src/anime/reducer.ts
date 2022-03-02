import { Action } from "redux-actions";
import {
    FETCH_ANIME_BEGIN,
    FETCH_ANIME_FAILED,
    FETCH_ANIMES_SUCCESS,
    FETCH_ANIME_SUCCESS,
    FETCH_CASTINGS_SUCCESS,
    FETCH_EPISODES_SUCCESS,
} from "./actions";

import { combineReducers } from "redux";

const loading = (state = false, action: Action<any>) => {
    if (action.type === FETCH_ANIME_BEGIN) {
        return action.payload.loading;
    }
    return state;
};

const item = (state = {}, action: Action<any>) => {
    if (action.type === FETCH_ANIME_SUCCESS) {
        return action.payload.item;
    }
    return state;
};

const items = (state = [], action: Action<any>) => {
    if (action.type === FETCH_ANIMES_SUCCESS) {
        return state.length
            ? [...state, ...action.payload.items]
            : action.payload.items
    }
    return state;
};

const episodes = (state = [], action: Action<any>) => {
    if (action.type === FETCH_EPISODES_SUCCESS) {
        return action.payload.episodes;
    }
    return state;
};

const castings = (state = [], action: Action<any>) => {
    if (action.type === FETCH_CASTINGS_SUCCESS) {
        return action.payload.castings;
    }
    return state;
};


const errors = (state = null, action: Action<any>) => {
    if (action.type === FETCH_ANIME_FAILED) {
        return action.payload.error;
    }
    return state;
};

const animeReducers = {
    item,
    items,
    errors,
    loading,
    episodes,
    castings
};

export default combineReducers(animeReducers);
