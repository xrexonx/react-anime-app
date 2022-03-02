import React, { useState } from "react";
import { Anime } from "../../_definitions/data";
import {Link} from "react-router-dom";

type Props = {
    item: Anime
}

function Item(props: Props) {
    const { item } = props;
    const title = item.attributes.canonicalTitle
    const truncatedTitle = title.length > 15 ? `${title.substring(0, 15)}...` : title
    const bgUrl = item.attributes.posterImage?.medium

    const [ratingStyle, setRatingStyle] = useState('yellow')
    const [rating, setRating] = useState(item.attributes.averageRating || 0)
    const [favoriteStyle, setFavoriteStyle] = useState('pink')
    const [favorite, setFavorite] = useState(item.attributes.favoritesCount || 0)

    const onClickRating = (style: string) => {
        setRatingStyle(style.length > 0 ? '' : 'yellow')
        setRating(style.length > 0 ? rating-1 : rating+1)
    }

    const onClickFavorite = (currentStyle: string) => {
        setFavoriteStyle(currentStyle.length > 0 ? '' : 'pink')
        setFavorite(currentStyle.length > 0 ? favorite-1 : favorite+1)
    }


    return (
        <>
            <div className="mdl-cell mdl-card mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--6-col-phone mdl-shadow--16dp">
                <div
                    className="mdl-card__title"
                    style={{
                        height: 190,
                        padding: 0,
                        background: `url(${bgUrl}) center / cover`
                    }}
                >
                    <Link className="mdl-card__title-text mdl-color-text--white transparent-overlay" to={`/anime/${item.id}`}>
                        {truncatedTitle}
                    </Link>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <button
                        className={`mdl-button mdl-button--icon mdl-button--colored mdl-color-text--${ratingStyle}-700`}
                        onClick={() => onClickRating(ratingStyle)}
                    >
                        <i className="material-icons">star</i>
                    </button> {rating}
                    <button
                        className={`mdl-button mdl-button--icon mdl-button--colored mdl-color-text--${favoriteStyle}-700`}
                        onClick={() => onClickFavorite(favoriteStyle)}
                    >
                        <i className="material-icons">favorite</i>
                    </button> {favorite}
                </div>
            </div>
        </>
    );
}

export default Item;
