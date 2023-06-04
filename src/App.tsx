import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import FotoFeed from "./pages/fotoFeed/fotoFeed";
import MapView from "./pages/map/mapTest";
import { Observation } from "./pages/observation/observation";
import { Route, Routes } from "react-router";
import { useAuth } from "./components/authprovider/authProvider";
import LoggedInNavbar from "./components/navbar/loggedInNavbar";

function App() {
  const { auth } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        {auth ? <LoggedInNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="FotoFeed" element={<FotoFeed />} />
          <Route path="MapView" element={<MapView />} />
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
