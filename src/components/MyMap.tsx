import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { customMarker, RoutePolyline } from ".";
import { useEffect, useRef } from "react";
import { setMarkersCoordinates } from "../redux/slices/mapOptionsSlice";
import { LatLngExpression } from "leaflet";

const MyMap = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeRoute = useAppSelector((state) => state.activeRoute);
  const center = useAppSelector((state) => state.mapOptions.center);
  const zoom = useAppSelector((state) => state.mapOptions.zoom);

  const markersCoordinates = useRef<number[][]>([]);

  useEffect(() => {
    activeRoute.key !== 0
      ? (markersCoordinates.current = [
          activeRoute.point_1.split(", ").map((a) => parseFloat(a)),
          activeRoute.point_2.split(", ").map((a) => parseFloat(a)),
          activeRoute.point_3.split(", ").map((a) => parseFloat(a)),
        ])
      : null;

    dispatch(setMarkersCoordinates(markersCoordinates.current));
  }, [dispatch, activeRoute]);

  return (
    <MapContainer
      className="map_container"
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markersCoordinates.current.map((position, i) => {
        return (
          <Marker
            key={i}
            position={position as LatLngExpression}
            icon={customMarker}
          />
        );
      })}
      <RoutePolyline />
    </MapContainer>
  );
};

export default MyMap;
