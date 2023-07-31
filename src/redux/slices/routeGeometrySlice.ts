import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LatLngExpression } from "leaflet";

interface routeGeometryState {
  pending: boolean;
  polyline: Array<LatLngExpression>;
  error: string | null;
}

const initialState: routeGeometryState = {
  pending: false,
  error: null,
  polyline: [],
};

const routeGeometrySlice = createSlice({
  name: "routeGeometry",
  initialState,
  reducers: {
    fetchRouteGeometrySuccess: (
      state,
      action: PayloadAction<Array<[number, number]>>
    ) => {
      state.pending = false;
      const coordinates = action.payload.map((lngLat) => {
        const latLng = [lngLat[1], lngLat[0]];
        return latLng;
      });
      state.polyline = coordinates as LatLngExpression[];
    },
    fetchRouteGeometryError: (state, action: PayloadAction<string>) => {
      state.pending = false;
      state.error = action.payload;
    },
    eraseRouteGeometry: (state) => {
      state.polyline = [];
    },
  },
});

export const {
  fetchRouteGeometrySuccess,
  fetchRouteGeometryError,
  eraseRouteGeometry,
} = routeGeometrySlice.actions;

export default routeGeometrySlice.reducer;
