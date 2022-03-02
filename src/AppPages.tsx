import React from "react";
import { Route, Routes } from "react-router-dom";
import Anime from "./anime/container/Anime";
import AnimeDetails from "./anime/container/AnimeDetails";

function AppPages() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Anime/>} />
                <Route path='/anime' element={<Anime/>} />
                <Route path='/anime/:id' element={<AnimeDetails/>} />
            </Routes>
        </>
    );
}

export default AppPages;
