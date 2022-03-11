import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Navigate } from "react-router-dom";
import UserIcon from "@material-ui/icons/People";
import { firebaseConfig } from "../../firebase.config";
import superDataProviders from "../../utils/superDataProviders";

import { Admin, Resource } from "react-admin";
import {
  PostList,
  PostShow,
  PostCreate,
  PostEdit,
} from "../../components/posts";
import {
  UserList,
  UserShow,
  UserCreate,
  UserEdit,
} from "../../components/users";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

const options = {};

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// const dataProvider = FirebaseDataProvider(firebaseConfig, options);
// const authProvider = FirebaseAuthProvider(firebaseConfig, options);
export default function Dashboard() {
  const { currentUser, currentRoles } = useContext(UserContext);

  //todo: add rule from firebase server to exclude non-admin to have access to databases
  if (
    !currentUser &&
    (!currentRoles.includes("admin") || !currentRoles.includes("customer"))
  ) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {/* <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="posts"
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />

        {currentRoles.includes("admin") ? (
          <Resource
            name="users"
            icon={UserIcon}
            list={UserList}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
          />
        ) : (
          <></>
        )}
      </Admin> */}
      test
    </>
  );
}
