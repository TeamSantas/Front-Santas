import React from "react";
import styled from "styled-components";
import MemberService from "../../../api/MemberService";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const Logout = () => {
  const router = useRouter();
  const [, , removeCookie] = useCookies(["token"]); // 수정

  const handleClickLogout = async () => {
    if (!confirm("로그아웃 하시겠어요?")) return;

    try {
      const response = await MemberService.logoutMember();
      if (response.status === 200) {
        removeCookie("token");
        alert("로그아웃 되었습니다.");
        router.push("/login");
      }
    } catch (e) {
      alert("로그아웃에 실패했습니다. 잠시 후 다시 시도해주세요.");
      console.error("logout error: ", e);
    }
  };
  return <LogoutButton onClick={handleClickLogout}>로그아웃</LogoutButton>;
};

export default Logout;

const LogoutButton = styled.button`
  color: #8e8e8e;
  border: 1px solid #8e8e8e;
  width: 100%;
  height: 48px;
  background-color: unset;
`;
