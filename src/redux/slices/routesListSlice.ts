import { createSlice } from "@reduxjs/toolkit";
import Route from "../../types/route";

const initialState: Route[] = [
  {
    key: 1,
    route: "Маршрут № 1",
    point_1: "59.84660399, 30.29496392",
    point_2: "59.82934196, 30.42423701",
    point_3: "59.83567701, 30.38064206",
    routeCoordinates: "",
  },
  {
    key: 2,
    route: "Маршрут № 2",
    point_1: "59.82934196, 30.42423701",
    point_2: "59.82761295, 30.41705607",
    point_3: "59.84660399, 30.29496392",
    routeCoordinates: "",
  },
  {
    key: 3,
    route: "Маршрут № 3",
    point_1: "59.83567701, 30.38064206",
    point_2: "59.84660399, 30.29496392",
    point_3: "59.82761295, 30.41705607",
    routeCoordinates: "",
  },
];

const routesListSlice = createSlice({
  name: "routesList",
  initialState,
  reducers: {},
});

export default routesListSlice.reducer;
