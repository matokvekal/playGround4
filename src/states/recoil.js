import { atom } from "recoil";

export const todoCount = atom({
  key: "todoCount",
  default: 0,
});
export const layout = atom({
  key: "layout",
  default: 0,
});

export const loginModal = atom({
  key: "_LoginModal",
  default: {
    formType: "",
    active: false,
    message: "<p></p>",
  },
});
