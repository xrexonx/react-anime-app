import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./main/Main";
import "./App.css";

function App() {
    const [title] = useState("Anime List");
    return (
      <BrowserRouter>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header headerTitle={title}/>
          <Main/>
          {/*<Footer/>*/}
        </div>
      </BrowserRouter>
    );
}

export default App;
