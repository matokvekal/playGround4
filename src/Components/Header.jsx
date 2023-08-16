import { useState } from "react";

import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
import { useRecoilState } from "recoil";
import { todoCount, loginModal } from "../states/recoil";
import { useStore } from "zustand";
import useDataStore from "../states/zustand";

const Header = () => {
  const [theme, setTheme] = useState("theme-light");
  const [todosCount] = useRecoilState(todoCount);
  const handleSwitch = () => {
    const newTheme = theme === "theme-light" ? "theme-dark" : "theme-light";
    setTheme(newTheme);
    
    document.documentElement.dataset.theme = newTheme;
  };
  const { openModal, modalState } = useStore(useDataStore);

  return (
    <div className="todoHeader">
      <h1>TODO</h1>
      <h5>from recoil {todosCount}</h5>
      <button onClick={openModal} id="modalButton">
        Modal
      </button>
      <span>{modalState ? "modal Open" : "modal close"}</span>
      <img
        src={theme === "theme-light" ? moonIcon : sunIcon}
        alt="moon/sun icon"
        onClick={handleSwitch}
      />
    </div>
  );
};
export default Header;
