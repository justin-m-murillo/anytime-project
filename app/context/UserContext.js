import { createContext } from "react";

import sampleImgGenerator from "../utils/sampleImgGenerator";

export const UserContext = createContext({
  userName: 'anytime.username',
  location: 'San Jose • CA',
  profileImg: sampleImgGenerator(720),
  isLoggedIn: true,
});