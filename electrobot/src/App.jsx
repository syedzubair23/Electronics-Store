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
import { Routes, Route } from "react-router-dom"
import TrendingProducts from "./components/TrendingProducts"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={[<Hero />, <TrendingProducts />, <Brands />, <Incentives />]} />
        <Route path="/store" element={[<Store />]} />
        <Route path="/checkout" element={[<Checkout />]} />

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
