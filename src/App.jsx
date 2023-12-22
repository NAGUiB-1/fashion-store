import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import Main from "./pages/Main";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import { AppState } from "./AppState";
import PopupCart from "./components/PopupCart";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);
  let { showCart } = AppState();
  return (
    <div className="">
      <Navbar />
      {showCart ? <PopupCart /> : ""}
      {/*<Category /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="products/:category" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
