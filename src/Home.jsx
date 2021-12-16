import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import { useLoadPhotos } from "./app/loadPhotosHook";
import { StoreData } from "./app/StoreContext";
import { fetchPhotos2 } from "./features/photo/photoSlice";
import HeaderScreen from "./HeaderScreen";
import ImagesScreen from "./ImagesScreen";

function Home() {
  useLoadPhotos();

  return (
    <div className="App">
      <HeaderScreen />
      <div className="card-container">
        <ImagesScreen />
      </div>
    </div>
  );
}

export default Home;
