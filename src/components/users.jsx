// in src/User.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="administrators" alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="mail" />
      <TextField source="uid" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="mail" />
      <TextField source="uid" />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="mail" />
      <TextInput source="uid" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="name" />
      <TextInput disabled source="mail" />
      <TextInput disabled source="uid" />
    </SimpleForm>
  </Edit>
);
