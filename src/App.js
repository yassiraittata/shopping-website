import "./App.css";
import Categories from "./components/categories/Categories";
import ProductsSwiper from "./components/products/swiper/ProductsSwiper";
import MainLayout from "./components/UI/layout/main/MainLayout";
import Footer from "./components/UI/layout/footer/Footer";
import ProductsList from "./components/products/product-list/ProductsList";
import ProductDetail from "./components/productDetail/ProductDetail";
import Cart from "./components/cart/cart/Cart";
import Login from "./components/authentication/Login";

function App() {
  return (
    <>
      <MainLayout>
        {/* <Categories />
        <ProductsSwiper />
        <ProductsSwiper />
        <ProductsSwiper /> */}
        {/* <ProductsList />  */}
        {/* <ProductDetail /> */}
        {/* <Cart /> */}
        <Login />
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
