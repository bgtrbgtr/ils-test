import axios from "axios";
import { LatLngExpression } from "leaflet";

export const fetchRouteGeometry = async (
  coordinates: string
): Promise<Array<LatLngExpression> | unknown> => {
  try {
    const response = await axios.get(
      `http://router.project-osrm.org/route/v1/driving/${coordinates}?geometries=geojson&overview=full&alternatives=false`
    );
    return response.data.routes[0].geometry.coordinates;
  } catch (error: unknown) {
    return error;
  }
};
