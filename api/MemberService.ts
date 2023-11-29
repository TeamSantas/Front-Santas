import {
  AuthAPIInstance,
  MemberAuthInstance,
  MemberFileInstance,
} from "./APIInstance";
import {
  MemberData,
  MemberRawData,
  PickMembersData,
  PutMemberData,
  ResponseData,
} from "../util/type";

class MemberService {
  //내정보 조회 🔑(마이페이지 조회)
  getLoggedMember = () =>
    MemberAuthInstance.get<ResponseData<MemberRawData>>(`/api/member`);

  //내정보 조회 🔑 (서버 / 마이페이지 조회)
  getServerLoggedMember = (token) => {
    const MembeServerAuthInstance = AuthAPIInstance(
      process.env.NEXT_PUBLIC_BASE_URL,
      token
    );
    return MembeServerAuthInstance.get<ResponseData<MemberRawData>>(
      `/api/member`
    );
  };

  //특정 유저정보 조회(익명이 특정 유저 검색)
  getMemberById = (config) =>
    MemberAuthInstance.get<ResponseData<MemberData>>(`/api/member`, config);

  // 나에게 하트를 보낸 친구 목록 API 🔑
  getPickedMeFriends = () => {
    return MemberAuthInstance.get<ResponseData<PickMembersData>>(
      `/api/member/pick`
    );
  };

  //유저 정보 수정 🔑
  putLoggedMember = (formData: PutMemberData) =>
    MemberFileInstance.put<ResponseData<PutMemberData>>(
      `/api/member`,
      formData
    );

  //회원탈퇴 🔑
  signoutMember = () =>
    MemberAuthInstance.post<ResponseData<MemberData>>(`/api/member/signout`);

  // 로그아웃 🔑
  logoutMember = () =>
    MemberAuthInstance.get<ResponseData<MemberData>>(`/api/member/logout`);
}
export default new MemberService();
