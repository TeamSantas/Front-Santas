import { atom } from "jotai";

export const gnbActiveAtom = atom("home");

export const modalStateAtom = atom({
  label: "",
  show: false,
});

export const friendsAtom = atom([]);
