import React, { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase";

// Component for the GPUs page, similar to the code from the previous project
const GPUs = () => {
  const [brands, setBrands] = useState({});
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [gpuDetails, setGpuDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const dbRef = ref(db, "/brands");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setBrands(snapshot.val());
        } else {
          console.error("No data available");
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const createBrandButtons = () => {
    return Object.keys(brands).map((brand) => (
      <button key={brand} className="button" onClick={() => toggleGPUs(brand)}>
        {brand}
      </button>
    ));
  };

  const createGpuButtons = () => {
    if (!selectedBrand) return null;
    return brands[selectedBrand].map((gpu) => (
      <button
        key={gpu.name}
        className="button"
        onClick={() => showGpuDetails(gpu)}
      >
        {gpu.name}
      </button>
    ));
  };

  const toggleGPUs = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(brand);
    }
    setGpuDetails(null);
  };

  const showGpuDetails = (gpu) => {
    setGpuDetails(gpu);
  };

  return (
    <div className="index-body">
      <div className="background3">
        <div className="gpu-intro" role="main">
          <h2>
            Choose the brands below to get started with finding your ideal GPU!
          </h2>
          <div id="brand-buttons" aria-live="polite">
            {loading ? <p>Loading...</p> : createBrandButtons()}
          </div>
          <br />
          <div id="gpu-buttons" aria-live="polite">
            {createGpuButtons()}
          </div>
          <div className="disclaimer">
            <h2>Disclaimer:</h2>
            <p>
              The prices mentioned are the current rates going for each GPU and
              may vary depending on the region and retailer.
            </p>
          </div>
          <div id="gpu-details" className="gpu-tree" aria-live="polite">
            {gpuDetails && (
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">{gpuDetails.name}</th>
                  </tr>
                  <tr>
                    <th>Specification</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Video Memory</td>
                    <td>{gpuDetails.videoMemory}</td>
                  </tr>
                  <tr>
                    <td>CUDA Cores</td>
                    <td>{gpuDetails.cudaCores}</td>
                  </tr>
                  <tr>
                    <td>Core Clock</td>
                    <td>{gpuDetails.coreClock}</td>
                  </tr>
                  <tr>
                    <td>Boost Clock</td>
                    <td>{gpuDetails.boostClock}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{gpuDetails.price}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          <div class="citation">
            <h2>Citation:</h2>
            <cite>
              <a href="https://www.asus.com/us/motherboards-components/graphics-cards/all-series/filter?Category=NVIDIA">
                ASUS
              </a>
            </cite>
            <br />
            <cite>
              <a href="https://www.gigabyte.com/Graphics-Card">Gigabyte</a>
            </cite>
            <br />
            <cite>
              <a href="https://www.msi.com/Graphics-cards">MSI</a>
            </cite>
            <br />
            <cite>
              <a href="https://www.zotac.com/us/page/graphics-cards-overview">
                ZOTAC
              </a>
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPUs;
