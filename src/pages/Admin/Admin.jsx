import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Admin() {
  const { currentUser, currentRoles } = useContext(UserContext);
  if (!currentUser && !currentRoles.includes("admin")) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
