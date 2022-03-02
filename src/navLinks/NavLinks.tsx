import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
      <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
          <Link to="/anime">Anime</Link>
      </nav>
  );
}

export default NavLinks;
