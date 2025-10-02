import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import StatisticPage from "./page/statisticPage";


class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/statistic" replace />} />
          <Route path="statistic" element={<StatisticPage />} />
          <Route path="category" element={<div>categoryPage</div>} />
          <Route path="product" element={<div>productPage</div>} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>}>
        </Route>
      </Routes>
    );
  }
}

export default App;
