import React, { useState, createContext } from "react";

let UserContext = createContext();
let { Provider, Consumer } = UserContext;

function UserProvider({ children }) {
  let [user, setUser] = useState(null);

  function login() {
    setUser({
      name: "Pablo",
    });
  }
  function logout() {
    setUser(null);
  }

  return <Provider value={{ user, login, logout }}>{children}</Provider>;
}

export { UserProvider, Consumer as UserConsumer, UserContext };
