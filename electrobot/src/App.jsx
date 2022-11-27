import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import ProductPage from "./components/ProductPage";
import Category from "./pages/Category";
import { Routes, Route } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Wishlist from "./components/Wishlist";
import SubcategoryPage from "./pages/SubcategoryPage";
import Store from "./pages/Store";
import ScrollToTop from "./components/ScrollToTop";
import OrderSummary from "./components/OrderSummary";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/:_category" element={<Category />} />
          <Route
            path="/:Category/:subcategory/:Id"
            element={<ProductPage />}
          />
          <Route path="/:subCategory/:id" element={<SubcategoryPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
