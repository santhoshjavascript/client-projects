// import NavBar from "../features/Header/components/NavBar";
import Hero from "../features/Hero/components/Hero";
import ProductList from "../features/ProductList/components/ProductList";
import Gender from "../features/Gender/components/Gender";

function Home() {
  return (
    <>
      <Hero />
      <ProductList type={"Hot Collections"} />
      <ProductList type={"Featured Products"} />
      <Gender />
      <ProductList type={"Featured Products"} />
    </>
  );
}

export default Home;
