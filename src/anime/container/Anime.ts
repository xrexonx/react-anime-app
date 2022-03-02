import React from 'react'
import { connect } from "react-redux";
import { AppState } from "../../_definitions/state";
import Anime from "../components/Anime";
import { fetchAnimes } from "../middleware";

const mapStateToProps = (state: AppState) => {

    if (state && state.anime) {

        const { anime: { error, items, loading  } } = state;

        return {
            items,
            error,
            loading,
        };
    }
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchAnimes: (offset: number = 1, limit: number = 10, search: string = "") => {
            dispatch(fetchAnimes(offset, limit, search));
        },
    };
};

const component: React.FunctionComponent<any> = Anime;
export default connect(mapStateToProps, mapDispatchToProps)(component);