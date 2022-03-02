import React, {useEffect, useState, useRef} from 'react'
import { debounce } from "lodash"
import Item from "../../anime/components/Item";
import { Anime as AnimeType } from "../../_definitions/data"
import "../anime.css";
import Loader from "../../common/Loader"

type Props = {
    items: AnimeType[]
    loading: boolean
    error: string[]
    fetchAnimes: (offset: number, limit: number, search: string) => void
}

function Anime(props: Props) {

    const { items, loading, error } = props

    const [offset, setOffset] = useState(1)

    useEffect(() => props.fetchAnimes(offset, 10, ""), [])

    const debouncedSearch = useRef(
        debounce(async (criteria) => {
            props.fetchAnimes(1, 10, criteria)
        }, 300)
    ).current

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value)
    }

    const onScroll = (e: any) => {
        const div = e.target
        const divScrollTop = div.scrollTop
        const limit = div.scrollHeight - div.clientHeight
        if (divScrollTop > 0 && divScrollTop + 1 > limit) {
            setOffset(offset+1)
            props.fetchAnimes(offset, 10, "")
        }
    }

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);


    if (error) {
        return (
            <div>{error}</div>
        );
    }


    return (
        <>
            <div className="mdl-grid app-max-width">
                <div className="mdl-cell mdl-cell--12-col mdl-layout__header-row">
                    <span className="mdl-layout-title mdl-color-text--grey-700">Filter: </span>
                    <span className="mdl-layout-title">
                        <i className="material-icons mdl-color-text--yellow-700">star</i>
                        <i className="material-icons mdl-color-text--pink-700">favorite</i>
                    </span>
                    <div className="mdl-layout-spacer" />
                    <ul className="mdl-list">
                        <li className="mdl-list__item">
                        <span className="mdl-list__item-primary-content">
                        <i className="material-icons">search</i>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="animeSearch" onChange={handleChange}/>
                            <label className="mdl-textfield__label" htmlFor="animeSearch">Search Anime</label>
                          </div>
                    </span>
                        </li>
                    </ul>
                    <div className="mdl-layout-spacer" />
                    <span className="mdl-layout-title mdl-color-text--grey-700">{items.length || 0} Results</span>
                </div>
            </div>
            <div className="mdl-grid app-max-width" onScroll={onScroll} style={{ height: 550, overflowY: "scroll" }}>
                {items && items.map((anime: AnimeType, index: number) => <Item key={index} item={anime}/>)}
                {loading && <Loader />}
            </div>
        </>
    );
}


export default Anime;
