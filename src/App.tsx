import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Observation from "./pages/observation/observation";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Observation" element={<Observation />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
