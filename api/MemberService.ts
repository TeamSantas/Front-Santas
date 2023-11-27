import { MemberAuthInstance } from "./APIInstance";
import {
  MemberData,
  MemberRawData,
  PutMemberData,
  ResponseData,
} from "../util/type";

class MemberService {
  //내정보 조회 🔑(마이페이지 조회)
  getLoggedMember = () =>
    MemberAuthInstance.get<ResponseData<MemberRawData>>(`/api/member`);

  //특정 유저정보 조회(익명이 특정 유저 검색)
  getMemberById = (config) =>
    MemberAuthInstance.get<ResponseData<MemberData>>(`/api/member`, config);

  //유저 정보 수정 🔑
  putLoggedMember = (config) =>
    MemberAuthInstance.put<ResponseData<PutMemberData>>(`/api/member`, config);

  //회원탈퇴 🔑
  signoutMember = () =>
    MemberAuthInstance.post<ResponseData<MemberData>>(`/api/member/signout`);

  // 로그아웃 🔑
  logoutMember = () =>
    MemberAuthInstance.get<ResponseData<MemberData>>(`/api/member/logout`);
}
export default new MemberService();
