import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LatLngExpression } from "leaflet";

interface MapOptionsState {
  center: LatLngExpression | undefined;
  zoom: number;
  markersCoordinates: number[][];
}

const initialState: MapOptionsState = {
  center: [59.8, 30.3333],
  zoom: 10,
  markersCoordinates: [[0, 0]],
};

const mapOptionsSlice = createSlice({
  name: "mapOptions",
  initialState,
  reducers: {
    setMarkersCoordinates: (state, action: PayloadAction<number[][]>) => {
      state.markersCoordinates = action.payload;
    },
    setCenter: (state, action: PayloadAction<[number, number]>) => {
      action.payload ? (state.center = action.payload) : null;
    },
  },
});

export const { setMarkersCoordinates, setCenter } = mapOptionsSlice.actions;

export default mapOptionsSlice.reducer;
