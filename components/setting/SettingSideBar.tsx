import React, { useEffect } from "react";
import styled from "styled-components";
import { loginUserDataAtom, sidebarOpenAtom } from "../../store/globalState";
import { useAtom } from "jotai";
import Link from "next/link";
import Logout from "./logout";
import Login from "./login";
import NotificationToggle from "./notification";
import BgmToggle from "./bgm";

const SettingSideBar = () => {
  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);
  const [storeUserData] = useAtom(loginUserDataAtom);

  const handleClickOutside = (e) => {
    if (e.target.id === "backdrop") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Backdrop id="backdrop" open={isOpen} onClick={handleClickOutside} />
      <SidebarContainer id="sidebar" open={isOpen}>
        <ContentWrapper>
          <div>
            {storeUserData?.id && <NotificationToggle />}
            {storeUserData?.id && <BgmToggle />}
            <LinkContent href={"https://pf.kakao.com/_wDRPxj"} target="_blank">
              신고 및 문의
            </LinkContent>
            <LinkContent
              href={
                "https://www.notion.so/merry-christmass/36927b1bd2b24a6888c0ee786b4eb865?pvs=4"
              }
              target="_blank"
            >
              공지 사항
            </LinkContent>
            <LinkContent
              href={
                "https://www.notion.so/merry-christmass/3292992054534d28a2f39c01e0e1e9d8?pvs=4"
              }
              target="_blank"
            >
              개인정보 처리방침
            </LinkContent>
          </div>
          {storeUserData?.id ? <Logout /> : <Login />}
        </ContentWrapper>
      </SidebarContainer>
    </>
  );
};

export default SettingSideBar;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: 999;
  transition: opacity 0.3s ease-in-out, visibility 0.3s;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

const SidebarContainer = styled.div`
  z-index: 1000;
  background-color: #f9f9f9;
  color: #8e8e8e;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 12px;
  right: 0;
  top: 0;
  width: 85%;
  max-width: 320px;
  padding: 40px 24px;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

const LinkContent = styled(Link)`
  cursor: pointer;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #8e8e8e;
  width: fit-content;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
`;
