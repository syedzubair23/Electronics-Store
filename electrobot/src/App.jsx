import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Incentives from "./components/Incentives"
import Brands from "./components/Brands"
import ShoppingCart from "./components/ShoppingCart"
import CheckoutForm from "./components/CheckoutForm"
import ProductDetails from "./components/ProductDetails"

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <CheckoutForm /> */}
      <ProductDetails />
      {/* <Hero />
      <Card />
      <Brands />
      <Incentives />
      <Footer /> */}
    </div>
  )
}

export default App
