import MemberService from "../MemberService";
import {useEffect, useState} from "react";
import {MemberData} from "../../util/type";


export async function getLoggedMember() {
  const res = await MemberService.getLoggedMember();
  return res.data.data.member;
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
