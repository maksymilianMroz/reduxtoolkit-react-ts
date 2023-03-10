import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PhotosState } from "./types";

const initialState: PhotosState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const data = await response.json();
  return data;
});

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default photosSlice.reducer;
