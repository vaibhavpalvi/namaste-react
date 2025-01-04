import { createContext } from "react";

const UserContext = createContext({
  userName: "Default user",
});

export default UserContext;
