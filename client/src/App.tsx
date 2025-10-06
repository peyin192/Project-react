import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import StatisticPage from "./page/statisticPage";
import CategoryPage from "./page/categoryPage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "./homePage/components/Header";
import Navbar from "./homePage/components/Navbar";
import Banner from "./homePage/components/Banner";
import Categories from "./homePage/components/Categories";
import ProductList from "./homePage/components/ProductList";
import SaleProducts from "./homePage/components/SaleProducts";
import Footer from "./homePage/components/Footer";


class App extends React.Component {
  render() {
    return (
      // <Routes>
      //   <Route path="/" element={<Layout />}>
      //     <Route index element={<Navigate to="/statistic" replace />} />
      //     <Route path="statistic" element={<StatisticPage />} />
      //     <Route path="category" element={<CategoryPage />} />
      //     <Route path="product" element={<div>productPage</div>} />
      //   </Route>
      //   <Route path="*" element={<div>404 Not Found</div>}>
      //   </Route>
      // </Routes>
      <div>
        <Header />
        <Navbar />
        <Banner />
        <Categories />
        <ProductList />
        <SaleProducts />
        <Footer />
      </div>
    );
  }
}

export default App;
