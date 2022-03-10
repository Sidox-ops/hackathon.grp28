import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Navigate } from "react-router-dom";

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
  FirebaseRealTimeSaga,
} from "react-admin-firebase";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const options = {};

const dataProvider = FirebaseDataProvider(config, options);
export default function Dashboard() {
  const { currentUser, currentRoles } = useContext(UserContext);

  //todo: add rule from firebase server to exclude non-admin to have access to databases
  if (!currentUser && !currentRoles.includes("admin")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource
          name="posts"
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />

        <Resource
          name="users"
          // icon={UserIcon}
          list={UserList}
          show={UserShow}
          create={UserCreate}
          edit={UserEdit}
        />
      </Admin>
    </>
  );
}
