import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import Route from "../../types/route";

const initialState: Route = {
  key: 0,
  route: "",
  routeCoordinates: "",
  point_1: "",
  point_2: "",
  point_3: "",
};

const activeRouteSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setActiveRoute: (state, action: PayloadAction<Route>) => {
      state.key = action.payload.key;
      state.point_1 = action.payload.point_1;
      state.point_2 = action.payload.point_2;
      state.point_3 = action.payload.point_3;
      state.route = action.payload.route;
      const latLngCoordinates = `${state.point_1};${state.point_2};${state.point_3}`;
      state.routeCoordinates = latLngCoordinates
        .split(";")
        .map((latLng) => latLng.split(",").reverse().join(","))
        .join(";")
        .replace(/\s/g, "");
    },
  },
});

export const { setActiveRoute } = activeRouteSlice.actions;

export default activeRouteSlice.reducer;
