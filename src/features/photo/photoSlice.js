import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhotos = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos`
  );
  const photos = response.data.slice(0, 10);
  return photos;
};

export const fetchPhotoDetails = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  return response.data;
};
