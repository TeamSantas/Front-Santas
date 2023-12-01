import { defaultMemberData, RecivedPresentData } from "./../util/type";
import { atom } from "jotai";
import { MemberData } from "../util/type";

// gnb
export const gnbActivePathAtom = atom("home");

// modals
export const modalStateAtom = atom({
  label: "",
  show: false,
});

// 친구 목록
export const friendsListAtom = atom([]);

// sidebar
export const sidebarOpenAtom = atom(false);
export const sidebarBgmAtom = atom(true);
export const sidebarNotificationAtom = atom(false);

// 나 / 친구 프로필 용
export const profileUserDataAtom = atom(defaultMemberData as MemberData); // 친구 프로필 용
export const loginUserDataAtom = atom(defaultMemberData as MemberData);

// ismycalendar
export const isMyCalendarAtom = atom(true);
export const todayPresentCountAtom = atom(0);

//받은 선물 수 리스트
export const receivedPresentListAtom = atom({} as RecivedPresentData[]);
