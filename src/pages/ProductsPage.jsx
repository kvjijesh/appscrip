import Footer from "../components/Footer"
import Header from "../components/Header"
import { Hero } from "../components/Hero"
import Products from "../components/Products"

function ProductsPage() {


    return (
      <>
        <Header />
        <div className="mt-[50px]">
          <Hero />
        </div>
        <div className="mt-[50px]">
          <Products />
        </div>
        <div className="mt-[50px]">
          <Footer />
        </div>
      </>
    )
  }

  export default ProductsPage