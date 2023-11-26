import { atom } from "jotai";

// gnb
export const gnbActivePathAtom = atom("home");

// modals
export const modalStateAtom = atom({
  label: "",
  show: false,
});

// friends
export const friendsAtom = atom([]);

// sidebar
export const sidebarOpenAtom = atom(false);
export const sidebarBgmAtom = atom(false);
export const sidebarNotificationAtom = atom(false);
