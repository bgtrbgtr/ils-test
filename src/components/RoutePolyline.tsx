import { Polyline, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  LatLngBounds,
  LatLngBoundsExpression,
  LatLngBoundsLiteral,
} from "leaflet";
import { setCenter } from "../redux/slices/mapOptionsSlice";

const RoutePolyline = (): JSX.Element => {
  const map = useMap();
  const dispatch = useAppDispatch();
  const coordinates = useAppSelector((state) => state.routeGeometry.polyline);
  const bounds = useRef<LatLngBoundsExpression>();

  useEffect(() => {
    if (coordinates.length > 0) {
      bounds.current = new LatLngBounds(coordinates as LatLngBoundsLiteral);
      const center = bounds.current.getCenter();
      dispatch(setCenter([center.lat, center.lng]));
      map.fitBounds(bounds.current);
    }
  }, [map, dispatch, coordinates]);

  return (
    <Polyline
      key={JSON.stringify(coordinates)}
      pathOptions={{ color: "blue" }}
      positions={coordinates}
    />
  );
};

export default RoutePolyline;
