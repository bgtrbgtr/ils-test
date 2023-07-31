import { Layout } from "antd";
import "leaflet/dist/leaflet.css";
import { MyMap, RoutesTable } from ".";

const { Content, Footer } = Layout;

const App = (): JSX.Element => {
  return (
    <Layout className="page">
      <Content className="main">
        <RoutesTable />
        <MyMap />
      </Content>
      <Footer>
        Масаев Александр{" "}
        <a href="https://t.me/lackluster_party" target="_blank">
          t.me/lackluster_party
        </a>
      </Footer>
    </Layout>
  );
};

export default App;
