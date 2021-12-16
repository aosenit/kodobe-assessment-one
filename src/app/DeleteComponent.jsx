import React, { useContext } from "react";
import { StoreData } from "./StoreContext";

const DeleteComponent = ({ id, callBack }) => {
  const { dispatch } = useContext(StoreData);

  const deletePhoto = async () => {
    dispatch({ type: "DELETE_PHOTO", payload: id.toString() });
    if (callBack) callBack();
  };

  return (
    <button onClick={deletePhoto} className="card-header-button">
      Delete
    </button>
  );
};

export default DeleteComponent;
