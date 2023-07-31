import type { ColumnsType } from "antd/es/table";
import Route from "../types/route";

export const columns: ColumnsType<Route> = [
  {
    title: "Маршрут",
    dataIndex: "route",
    key: "route",
    width: "22%",
  },
  {
    title: "Точка 1 (lat, lng)",
    dataIndex: "point_1",
    key: "point_1",
  },
  {
    title: "Точка 2 (lat, lng)",
    dataIndex: "point_2",
    key: "point_2",
  },
  {
    title: "Точка 3 (lat, lng)",
    dataIndex: "point_3",
    key: "point_3",
  },
];
