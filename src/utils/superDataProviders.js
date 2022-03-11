import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  UPDATE_MANY,
  DELETE,
  GET_MANY,
  GET_MANY_REFERENCE,
} from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import { FirebaseDataProvider } from "react-admin-firebase";
import { firebaseConfig } from "../firebase.config";

const dataProviders = [
  // {
  //   dataProvider: jsonServerProvider("https://jsonplaceholder.typicode.com"),
  //   resources: ["users", "todos"],
  // },
  {
    dataProvider: FirebaseDataProvider(firebaseConfig, {}),
    resources: ["administrators", "customers"],
  },
];

export default (type, resource, params) => {
  const dataProviderMapping = dataProviders.find((dp) =>
    dp.resources.includes(resource)
  );

  const mappingType = {
    [GET_LIST]: "getList",
    [GET_ONE]: "getOne",
    [GET_MANY]: "getMany",
    [GET_MANY_REFERENCE]: "getManyReference",
    [CREATE]: "create",
    [UPDATE]: "update",
    [UPDATE_MANY]: "updateMany",
    [DELETE]: "delete",
  };

  return dataProviderMapping.dataProvider[mappingType[type]](resource, params);
};
