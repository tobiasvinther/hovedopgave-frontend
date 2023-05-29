import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import FotoFeed from "./pages/fotoFeed/fotoFeed";
import MapView from "./pages/map/mapTest";
import { Observation } from "./pages/observation/observation";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="FotoFeed" element={<FotoFeed/>} />
          <Route path="MapView" element={<MapView/>} />
          <Route
            path="Observation"
            element={<Observation onSubmit={() => {}} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
