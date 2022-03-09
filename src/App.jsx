import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Graph from "./components/Graph";
import Navbar from "./components/Navbar";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Graph />}  />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
