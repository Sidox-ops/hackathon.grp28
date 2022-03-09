import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Outlet, Navigate } from "react-router-dom";

export default function Admin() {
  const { currentUser, currentRoles } = useContext(UserContext);

  //todo: add rule from firebase server to exclude non-admin to have access to databases
  if (!currentUser && !currentRoles.includes("admin")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}
