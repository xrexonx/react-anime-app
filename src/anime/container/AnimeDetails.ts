import React from "react"
import { connect } from "react-redux"
import { AppState } from "../../_definitions/state"
import AnimeDetails from "../components/AnimeDetails"
import { fetchAnime } from "../middleware"

const mapStateToProps = (state: AppState) => {

    if (state && state.anime) {

        const { anime: { error, item, loading, episodes, castings  } } = state

        return {
            item,
            error,
            loading,
            episodes,
            castings,
        };
    }
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchAnime: (id: string) => {
            dispatch(fetchAnime(id))
        },
    };
};

const component: React.FunctionComponent<any> = AnimeDetails;
export default connect(mapStateToProps, mapDispatchToProps)(component);