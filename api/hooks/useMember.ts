import MemberService from "../MemberService";

export async function getLoggedMember() {
  try {
    const res = await MemberService.getLoggedMember();
    return res.data.data.member;
  } catch (e) {
    return e;
  }
}
// export async function usePutMemberInfo(
//     nickname : string,
//     profileImageURL: string,
//     statusMessage: string
// ) {
//     const putMemberData : PutMemberData {
//         nicknames : nickname,
// //     profileImageURL: profileImageURL,
// //     statusMessage: statusMessage
//     };
//     await MemberService.putLoggedMember(putMemberData)
// }

export async function logoutMember() {
  try {
    const res = await MemberService.logoutMember();
    return res.data.data;
  } catch (e) {
    return e;
  }
}
