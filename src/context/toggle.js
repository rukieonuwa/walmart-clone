import { createContext, useState } from "react";

export const ToggleBar = createContext();
export const ToggleWrapper = ({ children }) => {
  let [toggle, setToggle] = useState(false);
  let state = {
    sidebar: [toggle, setToggle]
  };
  return <ToggleBar.Provider value={state}>{children}</ToggleBar.Provider>;
};
