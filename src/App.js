import About from "layouts/About";
import BlotingPaper from "layouts/BlotingPaper";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import Team from "layouts/Team";
import UniqueHand from "layouts/UniqueHand";
import Utility from "layouts/Utility";

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
      <div className="mb-200px">
        <Utility />
      </div>
      <div className="mb-200px">
        <BlotingPaper />
      </div>
      <div className="mb-200px">
        <Team />
      </div>
    </div>
  );
}

export default App;
