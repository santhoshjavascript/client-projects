import NavBar from "../features/Header/components/NavBar";
import Hero from "../features/hero/components/Hero";
import ProductList from "../features/ProductList/components/ProductList";
import Gender from "../features/Gender/components/Gender";
import Footer from "../features/Footer/components/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductList type={"Hot Collections"} />
      <ProductList type={"Featured Products"} />
      <Gender />
      <ProductList type={"Featured Products"} />
      <Footer />
    </div>
  );
}

export default Home;
