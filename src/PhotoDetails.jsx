import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DeleteComponent from "./app/DeleteComponent";
import { useLoadPhotos } from "./app/loadPhotosHook";
import { StoreData } from "./app/StoreContext";
import { fetchPhotoDetails } from "./features/photo/photoSlice";

const PhotoDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useLoadPhotos();
  const {
    state: { photos },
  } = useContext(StoreData);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const loadPhoto = async () => {
    const _data = await fetchPhotoDetails(id);
    setData(_data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      loadPhoto();
    }
  }, [id]);

  if (loading)
    return (
      <h2>
        Loading photo <span style={{ color: "blue" }}>{id}</span> Details...
      </h2>
    );

  return (
    <div className="App photoDetails">
      {data && (
        <>
          <div className="container">
            <h2>
              <span style={{ color: "rgb(17, 17, 156)", fontSize: "1.8rem" }}>
                TITLE:
              </span>{" "}
              <br /> {data.title}
            </h2>
            <div className="image">
              <img src={data.url} alt="photo" />
            </div>
            <div className="thumbnail">
              <img src={data.thumbnailUrl} alt="photo thumbnail" />
            </div>
            <h3>ID: {data.id}</h3>
            <h4>ALBUMID: {data.albumId}</h4>
            <br />
            <DeleteComponent id={id} callBack={() => navigate("/")} />
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoDetails;
