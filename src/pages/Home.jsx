import Cards from "./partials/Cards";
import Footer from "./partials/Footer";
import Nav from "./partials/Nav";

const Home = () => {
  return (
    <div className="bg-zinc-50 pt-24   relative w-full h-full">
      
      <h1 className="text-center mt-10 text-[4.5vw]">Experience the <span className="text-[#b17f44]">Aura</span> <br /> of Elegance.</h1>
      <Cards />

      <Footer />
    </div>
  );
};

export default Home;
