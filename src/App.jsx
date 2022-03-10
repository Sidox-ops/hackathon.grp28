import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import GraphSKC1 from "./components/GraphSKC1";
import GraphSKC2 from "./components/GraphSKC2";
import GraphSKC3 from "./components/GraphSKC3";

import Navbar from "./components/Navbar";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/charts" element={<><GraphSKC1 /><GraphSKC2 /><GraphSKC3 /></>}  />

        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
