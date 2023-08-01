import { Table, ConfigProvider } from "antd";
import { columns } from "../constants/constants";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import Route from "../types/route";
import { setActiveRoute } from "../redux/slices/activeRouteSlice";
import { useEffect } from "react";
import { fetchRouteAction } from "../redux/sagas/routeGeometrySaga";
import { eraseRouteGeometry } from "../redux/slices/routeGeometrySlice";

const RoutesTable = (): JSX.Element => {
  const activeRoute = useAppSelector((state) => state.activeRoute);
  const dispatch = useAppDispatch();

  useEffect(() => {
    activeRoute.routeCoordinates
      ? dispatch(fetchRouteAction(activeRoute.routeCoordinates))
      : null;
  }, [dispatch, activeRoute.routeCoordinates]);

  const handleRowSelection = (selected: Route) => {
    dispatch(eraseRouteGeometry());
    dispatch(setActiveRoute(selected));
  };

  const data = useAppSelector((state) => state.routesList);

  return (
    <div className="table">
      <h1 className="table_title">Выберите необходимый маршрут:</h1>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 8,
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowSelection={{ type: "radio", onSelect: handleRowSelection }}
          scroll={{ x: "min-content" }}
        />
      </ConfigProvider>
    </div>
  );
};

export default RoutesTable;
