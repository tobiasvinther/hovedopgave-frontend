import Home from "./pages/home/home";

import BirdInfo from "./pages/birdInfo/birdInfo";
import MapView from "./pages/map/mapTest";
import { Observation } from "./pages/observation/observation";
import { Route, Routes } from "react-router";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { useAuth } from "./components/authprovider/authProvider";
import PhotoGrid from "./components/fotofeed/photoGrid";
import NotAuthNavbar from "./components/navbar/notAuthNavbar";
import AuthNavbar from "./components/navbar/authNavbar";

function App() {
  const { auth } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        {auth ? <AuthNavbar /> : <NotAuthNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="BirdInfo" element={<BirdInfo />} />
          <Route path="MapView" element={<MapView />} />
          <Route path="FotoFeed" element={<PhotoGrid />} />
          <Route path="MapView" element={<MapView />} />
          <Route
            path="Observation"
            element={<Observation onSubmit={() => {}} />}
          />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
