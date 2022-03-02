import { Anime } from "./data"

export interface AppState {
    anime: AnimeState
}


interface AnimeState {
    error: string[]
    item: Anime
    items: Anime[]
    loading: boolean
    episodes: any
    castings: any
}
