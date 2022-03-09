import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import OurSolutions from "./pages/OurSolutions";
import WhoAreWe from "./pages/WhoAreWe";
import StudiesServices from "./pages/StudiesServices";
import ScientistValidation from "./pages/ScientistValidation";
import AdminPanel from "./pages/Admin/AdminPanel/AdminPanel";
import Admin from "./pages/Admin/Admin";
import CookieConsent from "react-cookie-consent";

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

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/panel" element={<AdminPanel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
