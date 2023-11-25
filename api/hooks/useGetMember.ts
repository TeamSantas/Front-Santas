import MemberService from "../MemberService";

export async function setGetMember() {
  return await MemberService.getLoggedMember();
}

export async function setGetMemberById(memberId) {
  const config = {
    params: {
      memberId: memberId,
    },
  };
  return await MemberService.getMemberById(config);
}

export async function setLoggedMemberInfo(nickName,imgURL) {
  const config = {
    params: {
      nickname: nickName,
      profileImageURL: imgURL,
      statusMessage: "none"
    }
  }
  return await MemberService.putLoggedMember(config);
}