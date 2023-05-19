import Navbar from "./components/navbar/navbar";
import Observation from "./pages/observation/observation";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="Observation" element={<Observation />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
