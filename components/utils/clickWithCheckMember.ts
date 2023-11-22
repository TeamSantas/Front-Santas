/**
 * 로그인 안된 유저는 /login으로 보냄
 * 로그인 confirm창 확인, 취소 유무를 리턴함
 *
 * @param storeUserData - auth context의 storeUserData
 * @returns {boolean} - 로그인한 유저: true
 */
export const checkMemberAndRedirect = (storeUserData) => {
  const isNotMember = !storeUserData || Object.keys(storeUserData).length === 0;

  if (isNotMember && confirm("로그인이 필요한 기능입니다.")) {
    window.location.href = "/login";
    return false;
  }
  return isNotMember;
};
