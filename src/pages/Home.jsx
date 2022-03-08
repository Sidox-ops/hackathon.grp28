import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Home() {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h1>
        {currentUser
          ? "You are loggin and in the home page"
          : "home page, please log in"}
      </h1>
    </div>
  );
}
