import React from "react";

type HeaderProps = {
    headerTitle: string;
}

function Header({headerTitle} : HeaderProps) {

    return (
        <header className="mdl-layout__header mdl-layout__header--waterfall app-header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout__title">
                  <span className="mdl-layout__title">
                      {headerTitle}
                  </span>
                </span>
            </div>
        </header>
    );
}

export default Header;
