import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import OurSolutions from "./pages/OurSolutions";
import WhoAreWe from "./pages/WhoAreWe";
import StudiesServices from "./pages/StudiesServices";
import ScientistValidation from "./pages/ScientistValidation";
import Dashboard from "./pages/Admin/Dashboard";
import NotFound from "./pages/NotFound";
import CookieConsent from "react-cookie-consent";
// import Home from "./pages/Home";
import GraphSKC1 from "./components/GraphSKC1";
import GraphSKC2 from "./components/GraphSKC2";
import GraphSKC3 from "./components/GraphSKC3";

import Navbar from "./components/Navbar";
//import Private from "./pages/Private/Private";
//import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Sure !!"
        cookieName="acceptCookies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>Please accept it o:)</span>
      </CookieConsent>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhatWeDo" element={<WhatWeDo />} />
        <Route path="/OurSolutions" element={<OurSolutions />} />
        <Route path="/WhoAreWe" element={<WhoAreWe />} />
        <Route path="/StudiesServices" element={<StudiesServices />} />
        <Route path="/ScientistValidation" element={<ScientistValidation />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/charts" element={<><GraphSKC1 /><GraphSKC2 /><GraphSKC3 /></>}  />

        {/*<Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>*/}
      </Routes>
    </>
  );
}

export default App;
