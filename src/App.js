import About from "layouts/About";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import UniqueHand from "layouts/UniqueHand";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mb-100px">
        <Hero />
      </div>
      <div className="mb-200px">
        <About />
      </div>
      <UniqueHand />
      <div className="mb-100px"></div>
    </div>
  );
}

export default App;
