import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

export const myRoomAtom = atom({
  key: "myRoom",
  default: "",
});
