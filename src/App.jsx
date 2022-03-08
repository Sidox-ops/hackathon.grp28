import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarHeader from "./components/NavbarHeader";
import Admin from "./pages/Admin/Admin";
import AdminHome from "./pages/Admin/AdminHome/AdminHome";

function App() {
  return (
    <>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/admin-home" element={<AdminHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
