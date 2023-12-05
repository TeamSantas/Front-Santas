import { defaultMemberData, defaultMemberRawData } from "../../util/type";
import MemberService from "../MemberService";

export async function getLoggedMember() {
  try {
    const res = await MemberService.getLoggedMember();
    if (res.status === 200) {
      return res.data.data.member;
    }
    return defaultMemberData;
  } catch (e) {
    console.error(e);
    return defaultMemberData;
  }
}

export async function getLoggedMemberRaw() {
  try {
    const res = await MemberService.getLoggedMember();
    if (res.status === 200) {
      return res.data.data;
    }
    return defaultMemberRawData;
  } catch (e) {
    console.error(e);
    return defaultMemberRawData;
  }
}

export async function logoutMember() {
  try {
    const res = await MemberService.logoutMember();
    return res.data.data;
  } catch (e) {
    return e;
  }
}
