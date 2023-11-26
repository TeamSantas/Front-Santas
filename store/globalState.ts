import { atom } from "jotai";

export const gnbActivePathAtom = atom("home");

export const modalStateAtom = atom({
  label: "",
  show: false,
});

export const friendsAtom = atom([]);
