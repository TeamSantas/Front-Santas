/**
 * 로그인 안된 유저는 /login으로 보내는 함수
 * @param storeUserData - auth context의 storeUserData
 * @returns {boolean}
 */
export const checkMemberAndRedirect = (storeUserData) => {
  if (!storeUserData || Object.keys(storeUserData).length === 0) {
    confirm("로그인이 필요한 기능입니다.");
    window.location.href = "/login";
    return true;
  }
  return false;
};
