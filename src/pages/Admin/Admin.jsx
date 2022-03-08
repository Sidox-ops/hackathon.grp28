import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Outlet, Navigate } from "react-router-dom";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

export default function Private() {
  const { currentUser } = useContext(UserContext);
  const dataProvider = jsonServerProvider(
    "https://jsonplaceholder.typicode.com"
  );

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
      </Admin>
      <Outlet />
    </>
  );
}
