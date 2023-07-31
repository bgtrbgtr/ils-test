import { call, put, takeLatest } from "typed-redux-saga";
import {
  fetchRouteGeometrySuccess,
  fetchRouteGeometryError,
} from "../slices/routeGeometrySlice";
import { fetchRouteGeometry } from "../../utils/api";
import { PayloadAction, createAction } from "@reduxjs/toolkit";

export const fetchRouteAction = createAction<string>("fetchRoute");

function* getRouteGeometry(action: PayloadAction<string>) {
  try {
    const routeGeometryData: Array<[number, number]> = yield call(
      fetchRouteGeometry,
      action.payload
    );
    yield put(fetchRouteGeometrySuccess(routeGeometryData));
  } catch (error) {
    yield put(fetchRouteGeometryError(error as string));
  }
}

function* routeGeometrySaga() {
  yield takeLatest(fetchRouteAction.type, getRouteGeometry);
}

export default routeGeometrySaga;
