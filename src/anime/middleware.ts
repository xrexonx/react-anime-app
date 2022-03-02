import { Dispatch } from "redux";

import axios from "axios";

import {
    fetchAnimeBegin,
    fetchAnimeFailed,
    fetchAnimeSuccess,
    fetchAnimesSuccess,
    fetchCastingsSuccess,
    fetchEpisodesSuccess,
} from "./actions";

const API_URL = 'https://kitsu.io/api/edge/anime'

export const fetchAnimes = (
    offset: number = 1,
    limit: number = 10,
    search: string = ""
) => {
    return (dispatch: Dispatch) => {
        dispatch(fetchAnimeBegin(true));

        const filter = search.length > 0  ? `&filter[text]=${search}` : ''

        axios
            .get(`${API_URL}?page[limit]=${limit}&page[offset]=${offset}${filter}`)
            .then(res => {
                dispatch(fetchAnimeBegin(false));
                dispatch(fetchAnimesSuccess(res.data.data));
            }).catch(function (error) {
                if (error.response) {
                    fetchAnimeFailed(error.response.data?.errors)
                }
        });
    };
};


export const fetchAnime = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(fetchAnimeBegin(true));

        Promise.all([
            axios.get(`${API_URL}/${id}`),
            axios.get(`${API_URL}/${id}/castings`),
            axios.get(`${API_URL}/${id}/episodes`)
        ]).then(response => {
            const [anime, casting, episode] = response
            dispatch(fetchAnimeSuccess(anime.data.data));
            dispatch(fetchEpisodesSuccess(episode.data.data));
            dispatch(fetchCastingsSuccess(casting.data.data));
            dispatch(fetchAnimeBegin(false));
        })
    };
}
