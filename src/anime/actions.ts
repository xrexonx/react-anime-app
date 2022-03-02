import { Anime } from "../_definitions/data";

export const FETCH_ANIME_BEGIN = "FETCH_ANIME_BEGIN";
export const FETCH_ANIME_SUCCESS = "FETCH_ANIME_SUCCESS";
export const FETCH_ANIME_FAILED = "FETCH_ANIME_FAILED";
export const FETCH_ANIMES_SUCCESS = "FETCH_ANIMES_SUCCESS";
export const FETCH_EPISODES_SUCCESS = "FETCH_EPISODES_SUCCESS";
export const FETCH_CASTINGS_SUCCESS = "FETCH_CASTINGS_SUCCESS";

export const fetchAnimeBegin = (loading: boolean) => ({
    type: FETCH_ANIME_BEGIN,
    payload: { loading },
});

export const fetchAnimesSuccess = (items: Anime[]) => ({
    type: FETCH_ANIMES_SUCCESS,
    payload: { items },
});

export const fetchAnimeSuccess = (item: Anime) => ({
    type: FETCH_ANIME_SUCCESS,
    payload: { item },
});

export const fetchAnimeFailed = (error: any) => ({
    type: FETCH_ANIME_FAILED,
    payload: { error },
});

export const fetchEpisodesSuccess = (episodes: any) => ({
    type: FETCH_EPISODES_SUCCESS,
    payload: { episodes },
});


export const fetchCastingsSuccess = (castings: any) => ({
    type: FETCH_CASTINGS_SUCCESS,
    payload: { castings },
});