import { createContext, useEffect, useReducer, useState } from "react";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../utils/firebase.utils";

//Reducer
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  console.log("dispatched:", type, payload);
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

//context
export const UserContext = createContext({
  setUser: () => null,
  user: null,
});

export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState(null);

  //useReducer Hook
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);
  const setUser = (user) =>
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setUser(user);
    });
    //when component unmounts:
    return unsubscribe;
  }, []);

  const value = { user: currentUser, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
