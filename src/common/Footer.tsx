import React from "react";


function Footer() {
    return (
        <footer className="mdl-mini-footer">
            <div className="mdl-mini-footer__left-section">
                <div className="mdl-logo">Anime react app</div>
            </div>
            <div className="mdl-mini-footer__right-section">
                <ul className="mdl-mini-footer__link-list">
                    <li><a href="/">Help</a></li>
                    <li><a href="/">Privacy & Terms</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;