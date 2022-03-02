import "./App.css";
import Categories from "./components/categories/Categories";
import ProductsSwiper from "./components/products/swiper/ProductsSwiper";
import MainLayout from "./components/UI/layout/main/MainLayout";
import Footer from "./components/UI/layout/footer/Footer";

function App() {
  return (
    <>
      <MainLayout>
        <Categories />
        <ProductsSwiper />
        <ProductsSwiper />
        <ProductsSwiper />
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
