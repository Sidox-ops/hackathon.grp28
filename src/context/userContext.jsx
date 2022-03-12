import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

  const [currentRoles, setCurrentRoles] = useState(["viewer"]);
  const [administratorsUid, setAdministratorsUid] = useState([]);
  const [customersUid, setCustomersUid] = useState([]);
  const usersCollectionRef = collection(db, "users-roles");
  useEffect(() => {
    const getUsersRoles = async () => {
      const data = await getDocs(usersCollectionRef);
      setAdministratorsUid(
        data.docs.map((doc) => ({
          administratorsUid,
          ...doc.data().administrators,
        }))
      );
      setCustomersUid(
        data.docs.map((doc) => ({ customersUid, ...doc.data().customers }))
      );
    };
    getUsersRoles();
  }, []);

  useEffect(() => {
    if (
      administratorsUid.length !== 0 &&
      currentUser !== null &&
      customersUid.length !== 0
    ) {
      const arrAdmin = Object.values(administratorsUid[0]);
      const arrCustomers = Object.values(customersUid[0]);
      if (arrAdmin.includes(currentUser?.uid))
        setCurrentRoles([...currentRoles, "admin"]);
      if (arrCustomers.includes(currentUser?.uid))
        setCurrentRoles([...currentRoles, "customer"]);
    }
  }, [currentUser, administratorsUid, customersUid]);

  return (
    <UserContext.Provider
      value={{ signUp, signIn, currentUser, currentRoles, setCurrentRoles }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
