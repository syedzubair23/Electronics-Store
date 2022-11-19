import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Incentives from "./components/Incentives"
import Brands from "./components/Brands"
import ShoppingCart from "./components/ShoppingCart"
import Checkout from "./components/Checkout"
import ProductDetails from "./components/ProductDetails"
import Store from "./pages/Store"
import Sensors from "./pages/Sensors"
import { Routes, Route } from "react-router-dom"
import TrendingProducts from "./components/TrendingProducts"
import Frontpage from "./pages/Frontpage"
import Wishlist from "./components/Wishlist"
import CustomSelect from "./components/CustomSelect"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={[<Frontpage />]} />
        <Route path="/wishlist" element={[<Wishlist />]} /> 
        <Route path="/checkout" element={[<Checkout />]} />
        <Route path="/store" element={[<Store />]} />
        <Route path="/sensors" element={[<Sensors /> ]} />
        <Route path="/product-details/:id" element={[<ProductDetails />]} />
      {/* <Route path="/" element={[<TrendingProducts /> ]} /> */}

        {/* <Route path="/shopping-cart" element={[<ShoppingCart />]} /> */}

      </Routes>      
      <Footer />

      {/* <ProductDetails /> */}
      {/* <Hero />
      <Card />
      <Brands />
      <Incentives />
      <Footer /> */}
    </div>
  )
}

export default App
