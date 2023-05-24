import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Observation from "./pages/observation/observation";
import BirdInfo from "./pages/birdInfo/birdInfo";
import MapView from "./pages/map/mapTest";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Observation" element={<Observation />} />
          <Route path="BirdInfo" element={<BirdInfo/>} />
          <Route path="MapView" element={<MapView/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
