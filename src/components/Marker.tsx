import L from "leaflet";

const customMarker = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [10, 15],
  iconAnchor: [5, 15],
  popupAnchor: [20, -40],
});

export default customMarker;
