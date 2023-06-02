import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";

import BirdInfo from "./pages/birdInfo/birdInfo";
import MapView from "./pages/map/mapTest";
import { Observation } from "./pages/observation/observation";
import { Route, Routes } from "react-router";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="BirdInfo" element={<BirdInfo/>} />
          <Route path="MapView" element={<MapView/>} />
          <Route
            path="Observation"
            element={<Observation onSubmit={() => {}} />}
          />
          <Route path="Login" element={<Login/>} />
          <Route path="Register" element={<Register/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
