import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import OurSolutions from "./pages/OurSolutions";
import WhoAreWe from "./pages/WhoAreWe";
import StudiesServices from "./pages/StudiesServices";
import ScientistValidation from "./pages/ScientistValidation";
import NotFound from "./pages/NotFound";
import Cookies from './components/Cookies';
import ContactUs from "./pages/ContactUs";
import GraphSKC1 from "./components/GraphSKC1";
import GraphSKC2 from "./components/GraphSKC2";
import GraphSKC3 from "./components/GraphSKC3";
import Admin from "./pages/Admin/Admin";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <>
      <Cookies/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhatWeDo" element={<WhatWeDo />} />
        <Route path="/OurSolutions" element={<OurSolutions />} />
        <Route path="/WhoAreWe" element={<WhoAreWe />} />
        <Route path="/StudiesServices" element={<StudiesServices />} />
        <Route path="/ScientistValidation" element={<ScientistValidation />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/charts"
          element={
            <>
              <GraphSKC1 />
              <GraphSKC2 />
              <GraphSKC3 />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
