import React, { useEffect } from "react";
import styled from "styled-components";
import { loginUserDataAtom, sidebarOpenAtom } from "../../store/globalState";
import { useAtom } from "jotai";
import Link from "next/link";
import Logout from "./logout";
import Login from "./login";
import NotificationToggle from "./notification";
import BgmToggle from "./bgm";
import { CenteredFlex } from "../../styles/styledComponentModule";

const SettingSideBar = () => {
  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);
  const [storeUserData] = useAtom(loginUserDataAtom);
  const isLoginUser = storeUserData.id > 0;

  const handleClickOutside = (e) => {
    if (e.target.id === "backdrop") {
      setIsOpen(false);
    }
  };

  const handleClickClose = () => setIsOpen(false);

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
            {isLoginUser && <NotificationToggle />}
            {isLoginUser && <BgmToggle />}
            <LinkContent
              href={
                "https://www.notion.so/merry-christmass/36927b1bd2b24a6888c0ee786b4eb865?pvs=4"
              }
              target="_blank"
            >
              공지 사항
            </LinkContent>
            <LinkContent href={"/snowball"} onClick={handleClickClose}>
              스노우볼 구경하기 ☃️
            </LinkContent>
            <LinkContent
              href={"/ca8f8e79-d48d-4bca-a653-04093125a2c5"}
              onClick={handleClickClose}
            >
              산타즈 캘린더 바로가기 🎅
            </LinkContent>
          </div>
          <Bottom>
            <LinkWrapper>
              <LinkContent
                href={"https://pf.kakao.com/_wDRPxj"}
                target="_blank"
              >
                신고 및 문의
              </LinkContent>
              |
              <LinkContent
                href={
                  "https://www.notion.so/merry-christmass/3292992054534d28a2f39c01e0e1e9d8?pvs=4"
                }
                target="_blank"
              >
                개인정보 처리방침
              </LinkContent>
            </LinkWrapper>
            {isLoginUser ? <Logout /> : <Login />}
            <LinkWrapper>
              <Content>상호명: 머지고래 |</Content>
              <Content>사업자등록번호: 775-06-01556</Content>
            </LinkWrapper>
          </Bottom>
        </ContentWrapper>
      </SidebarContainer>
    </>
  );
};

export default SettingSideBar;

const LinkWrapper = styled(CenteredFlex)`
  gap: 5px;
  font-size: 12px;
  align-items: center;
`;

const Bottom = styled.div``;
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
  height: 100%;
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

const Content = styled.div`
  padding-top: 10px;
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  text-decoration: none;
  color: #b1b1b1;
  width: fit-content;
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
