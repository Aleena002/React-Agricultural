import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer"; // import footer

function Home() {
  const categories = ["Wheat", "Rice", "Corn"];

  const [selectedCrop, setSelectedCrop] = useState({
    name: "Wheat",
    description: "Wheat is a major cereal crop grown in winter.",
    season: "Winter",
  });

  const cropsData = {
    Wheat: { name: "Wheat", description: "Wheat is grown in winter.", season: "Winter" },
    Rice: { name: "Rice", description: "Rice is grown in monsoon.", season: "Monsoon" },
    Corn: { name: "Corn", description: "Corn is grown in summer.", season: "Summer" },
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main content */}
      <div className="container mt-4 flex-grow-1">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <Sidebar
              categories={categories}
              onCategoryClick={(category) => setSelectedCrop(cropsData[category])}
            />
          </div>
          <div className="col-12 col-md-9">
            <MainContent crop={selectedCrop} />
          </div>
        </div>
      </div>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}

export default Home;
