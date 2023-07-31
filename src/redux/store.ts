import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import routeGeometrySaga from "./sagas/routeGeometrySaga";
import {
  activeRouteReducer,
  routeGeometryReducer,
  routesListReducer,
  mapOptionsReducer,
} from "./slices";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    activeRoute: activeRouteReducer,
    routeGeometry: routeGeometryReducer,
    routesList: routesListReducer,
    mapOptions: mapOptionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(routeGeometrySaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
