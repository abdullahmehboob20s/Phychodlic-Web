import About from "layouts/About";
import BlotingPaper from "layouts/BlotingPaper";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import JoinPrivateSale from "layouts/JoinPrivateSale";
import Navbar from "layouts/Navbar";
import Roadmap from "layouts/Roadmap";
import Team from "layouts/Team";
import UniqueHand from "layouts/UniqueHand";
import Utility from "layouts/Utility";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mb-36 sm:mb-44 md:mb-24 xl:mb-150px">
        <Hero />
      </div>
      <div className="mb-24 sm:mb-28 lg:mb-36 xl:mb-200px">
        <About />
      </div>
      <UniqueHand />
      <div className="mb-24 sm:mb-28 lg:mb-36 xl:mb-200px">
        <Utility />
      </div>
      <div className="mb-24 sm:mb-28 lg:mb-36 xl:mb-200px">
        <BlotingPaper />
      </div>
      <div className="mb-24 sm:mb-28 lg:mb-36 xl:mb-200px">
        <Roadmap />
      </div>
      <div className="mb-24 xl:mb-150px">
        <Team />
      </div>
      <div className="mb-24 sm:mb-28 lg:mb-36 xl:mb-200px">
        <JoinPrivateSale />
      </div>
      <Footer />
    </div>
  );
}

export default App;
