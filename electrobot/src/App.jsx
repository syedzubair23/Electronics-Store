import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Checkout from "./components/Checkout"
import ProductPage from "./components/ProductPage"
import Store from "./pages/Store"
import Sensors from "./pages/Sensors"
import { Routes, Route } from "react-router-dom"
import Frontpage from "./pages/Frontpage"
import Wishlist from "./components/Wishlist"
import CategoryPage from "./pages/CategoryPage"
import CategoryFilters from "./pages/CategoryFilters"

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
        <Route path="/product-details/:id" element={[<ProductPage />]} />
        <Route path="/category/:id" element={[<CategoryPage />]} />
        <Route path="/category-filters" element={[<CategoryFilters />]} />
        
      </Routes>      
      <Footer />

   
    </div>
  )
}

export default App
