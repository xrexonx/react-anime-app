import React, { Fragment } from "react";
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
    return (
        <Fragment>
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
                    <button className="mdl-button mdl-button--icon mdl-button--colored mdl-color-text--yellow-700">
                        <i className="material-icons">star</i>
                    </button> {item.attributes.averageRating}
                    <button id="share-first" className="mdl-button mdl-button--icon mdl-button--colored mdl-color-text--pink-700">
                        <i className="material-icons">favorite</i>
                    </button> {item.attributes.favoritesCount}
                </div>
            </div>


        </Fragment>
    );
}

export default Item;
