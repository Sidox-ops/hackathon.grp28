import React from "react";
import UserIcon from "@material-ui/icons/People";
import SupportAgentIcon from "@material-ui/icons/ContactSupport";
import CheckIcon from "@material-ui/icons/Check";
import CashIcon from "@material-ui/icons/MonetizationOn";
import { firebaseConfig } from "../../firebase.config";
import superDataProviders from "../../utils/superDataProviders";

import { Admin, Resource, ListGuesser } from "react-admin";
import {
  UserList,
  UserShow,
  UserCreate,
  UserEdit,
} from "../../components/users";
import { FirebaseAuthProvider } from "react-admin-firebase";

export default function AdminDashboard() {
  const authProvider = FirebaseAuthProvider((firebaseConfig, {}));

  return (
    <>
      <Admin dataProvider={superDataProviders} authProvider={authProvider}>
        <Resource name="users" list={ListGuesser} icon={UserIcon} />
        <Resource name="todos" list={ListGuesser} icon={CheckIcon} />
        <Resource
          name="administrators"
          icon={SupportAgentIcon}
          list={UserList}
          show={UserShow}
          create={UserCreate}
          edit={UserEdit}
        />
        <Resource
          name="customers"
          icon={CashIcon}
          list={UserList}
          show={UserShow}
          create={UserCreate}
          edit={UserEdit}
        />
      </Admin>
    </>
  );
}
