import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Checkout from "./components/Checkout"
import ProductPage from "./components/ProductPage"
import Category from "./pages/Category"
import { Routes, Route } from "react-router-dom"
import Frontpage from "./pages/Frontpage"
import Wishlist from "./components/Wishlist"
import SubcategoryPage from "./pages/SubcategoryPage"
import Store from "./pages/Store"
import ListViewCard from "./components/ListViewCard"

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <ListViewCard /> */}

      <Routes>
        <Route path="/" element={[<Frontpage />]} />
        <Route path="/wishlist" element={[<Wishlist />]} /> 
        <Route path="/checkout" element={[<Checkout />]} />
        <Route path="/:_category" element={[<Category /> ]} />
        <Route path="/:Category/:subcategory/:Id" element={[<ProductPage />]} />
        <Route path="/:category/:id" element={[<SubcategoryPage />]} />
        <Route path="/store" element={[<Store />]} />
        
      </Routes>      
      <Footer />

   
    </div>
  )
}

export default App
