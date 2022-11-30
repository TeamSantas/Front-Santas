import MemberService from "../MemberService";

export async function setGetMember() {
  const res = await MemberService.getLoggedMember();

  if (res.status === 200) return res.data.data;
}

export async function setGetMemberById(memberId) {
  const config = {
    params: {
      memberId: memberId,
    },
  };
  const res = await MemberService.getMemberById(config);

  if (res.status === 200) return res.data.data;
}