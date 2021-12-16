import { useEffect, useContext } from "react";
import { fetchPhotos } from "../features/photo/photoSlice";
import { StoreData } from "./StoreContext";

export const useLoadPhotos = () => {
  const { state, dispatch } = useContext(StoreData);

  const loadImages = async () => {
    const images = await fetchPhotos();
    dispatch({ type: "FETCH_PHOTOS", payload: images });
  };

  useEffect(() => {
    if (!state.photos) {
      loadImages();
    }
  }, []);
};
