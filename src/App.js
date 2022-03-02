import "./App.css";
import Categories from "./components/categories/Categories";
import ProductsList from "./components/products/ProductsList";
import ProductsSwiper from "./components/products/swiper/ProductsSwiper";
import MainHeader from "./components/UI/header/MainHeader";
import MainLayout from "./components/UI/layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Categories />
        <ProductsSwiper />
        <ProductsSwiper />
        <ProductsSwiper />
      </MainLayout>
    </>
  );
}

export default App;
