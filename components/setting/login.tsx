import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleClickLogin = () => {
    router.replace("/login");
  };

  return <LoginButton onClick={handleClickLogin}>로그인</LoginButton>;
};

export default Login;

const LoginButton = styled.button`
  color: #8e8e8e;
  border: 1px solid #8e8e8e;
  width: 100%;
  height: 48px;
  background-color: unset;
`;
