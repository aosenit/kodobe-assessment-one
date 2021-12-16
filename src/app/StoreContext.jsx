import { createContext, useReducer } from "react";

const initialData = {
  photos: null,
};

export const StoreData = createContext(initialData);

const storeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PHOTOS":
      return { ...state, photos: action.payload };
    case "DELETE_PHOTO":
      return {
        ...state,
        photos: state.photos.filter(
          (photo) => photo.id.toString() !== action.payload
        ),
      };
    default:
      return state;
  }
};

const StoreComponent = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialData);
  return (
    <StoreData.Provider value={{ state, dispatch }}>
      {children}
    </StoreData.Provider>
  );
};

export default StoreComponent;
