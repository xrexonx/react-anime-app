import React, { useEffect } from "react"
import { Anime as AnimeType } from "../../_definitions/data"
import "../anime.css"
import { Link, useParams } from "react-router-dom"
import Loader from "../../common/Loader"

type Props = {
    item: AnimeType
    loading: boolean
    error: string[]
    episodes: any
    castings: any
    fetchAnime: (id: string | undefined) => void;
}

function AnimeDetails(props: Props) {

    const { item, loading, error, episodes, castings } = props;

    let { id } = useParams();

    useEffect(() => {
        props.fetchAnime(id)
    }, []);

    if (loading) {
        return <Loader />
    }

    if (error) {
        return (
            <div>{error}</div>
        );
    }

    const noImage = 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg'

    return (
        <>
            <div className="mdl-grid app-max-width">
                <div className="mdl-cell mdl-cell--12-col arrow-back">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color-text--black">
                        <i className="material-icons">arrow_back</i>
                        <Link className="mdl-color-text--black" to="/anime">Back</Link>
                    </button>
                </div>
            </div>
            <section className="app-max-width section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                <div className="mdl-card mdl-cell mdl-cell--12-col">
                    <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                        <div className="mdl-cell mdl-cell--5-col mdl-cell--1-col-phone">
                            <img src={item?.attributes?.posterImage?.small} alt=""/>
                            <ul className="demo-list-icon mdl-list mt-2 episode-ls">
                                <li className="mdl-list__item">
                                    <span className="mdl-list__item-primary-content">
                                        <i className="material-icons mdl-color-text--yellow-700">star</i>
                                        {item?.attributes?.averageRating} from {item?.attributes?.userCount} users
                                    </span>
                                </li>
                                <li className="mdl-list__item">
                                    <span className="mdl-list__item-primary-content">
                                        <i className="material-icons mdl-color-text--pink-700">favorite</i>
                                        {item?.attributes?.favoritesCount}
                                        &nbsp;&nbsp; Rank: #{item?.attributes?.ratingRank}
                                    </span>
                                </li>
                                <li className="mdl-list__item">
                                    <span className="mdl-list__item-primary-content">
                                        Rated: {item.attributes?.ageRating} ({item.attributes?.ageRatingGuide})
                                    </span>
                                </li>
                                <li className="mdl-list__item">
                                    <span className="mdl-list__item-primary-content">
                                        Aired on: {item.attributes?.startDate}
                                    </span>
                                </li>
                                <li className="mdl-list__item">
                                    <span className="mdl-list__item-primary-content">
                                        Ongoing or ended on: {item.attributes?.endDate}
                                    </span>
                                </li>
                                <li className="mdl-list__item">
                                    <span className="mdl-list__item-primary-content">
                                        Type: {item.attributes?.showType}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="section__text mdl-cell mdl-cell--7-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--12-col">
                                    <h5>{item?.attributes?.canonicalTitle}</h5>
                                    <span>{item?.attributes?.description}</span>
                                </div>
                            </div>
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--12-col">
                                    <h5>Character</h5>
                                    <div className="mdl-grid app-max-width">
                                        {castings && castings.map((casting: AnimeType, index: number) => (
                                            <div key={index} className="mdl-cell mdl-card mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--6-col-phone mdl-shadow--16dp">
                                                <div
                                                    className="mdl-card__title"
                                                    style={{
                                                        height: 150,
                                                        padding: 0,
                                                        background: `url(${noImage}) center / cover`
                                                    }}
                                                >
                                                    <Link className="mdl-card__title-text mdl-color-text--white content character" to={`/anime/${item.id}`}>
                                                        {casting.attributes.role}
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--12-col">
                                    <h5>Episodes</h5>
                                    <ul className="mdl-list episode-ls">
                                        {episodes && episodes.map((episode: any, index: number) => (
                                            <li className="mdl-list__item" key={index}>
                                            <span className="mdl-list__item-primary-content">
                                                <i className="material-icons mdl-list__item-icon mdl-color-text--green-700">check</i>
                                                {episode.attributes.airdate} - &nbsp;
                                                {episode.attributes.number}. &nbsp;
                                                {episode.attributes.canonicalTitle || 'No Episode title'}
                                            </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}


export default AnimeDetails;
