import styled from "styled-components";
import { Flex, Icons } from "../../styles/styledComponentModule";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import Sidebar from "../mypage/Sidebar";
import {getTodayPresentCount} from "../../api/hooks/useGetPresentDetail";

const Logo = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  background: none;
  background-image: url("/assets/image/Logo.svg");
  background-repeat: no-repeat;
  width: 120px;
  height: 40px;
  border: none;
  margin-left: 20px;
  z-index: 5;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const MyPage = styled(Icons)`
  width: 150px;
  height: auto;
  margin-right: 2%;
  cursor: pointer;
  background-image: url("/assets/image/icons/mypage.png");
  z-index: 5;
  @media (max-width: 600px) {
    width: 75px;
    margin-left: 0;
  }
`;

const Menu = styled.img`
  margin: 20px;
  width: 55px;
  height: auto;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(45deg)
    brightness(104%) contrast(103%);
  cursor: pointer;
  color: white;
  z-index: 5;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    margin-right: 0;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 25px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 600px) {
    margin: 0;
    font-size: 15px;
  }
`;

const Text2 = styled(Text)`
  font-size: 14px;
  @media (max-width: 600px) {
    margin: 0;
    font-size: 12px;
  }
`;

const Header = () => {
  const router = useRouter();
  const currPath = router.pathname.slice(1);
  const [menuOnOff, setMenuOnOff] = useState(false);
  const [todayCount, setTodayCount] = useState(null);
  const menuHandler = () => setMenuOnOff(!menuOnOff);
  const menuOffHandler = () => setMenuOnOff(false);
  //로고를 누르면 사이드바 닫힘
  //햄버거 바를 누르면 사이드바 열림

  const getCount = async () => {
    try {
      const res = await getTodayPresentCount();
      // console.log("카드세부정보", res);
      setTodayCount(res.data.data);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(()=>{
    getCount();
  },[])

  return (
    <>
      {currPath === "onboarding" ? (
        <></>
      ) : currPath === "logout" ? <></> :
          currPath === "login" ? <></> :
        currPath === "title" ? <></> : (
        <>
          <Flex>
            <Logo
              onClick={() => {
                router.push("/");
                menuOffHandler();
              }}
            ></Logo>
            {currPath === "mypage" ? (
              <Menu
                src="/assets/image/icons/menu-icon.svg"
                onClick={menuHandler}
              />
            ) : (
              <MyPage
                onClick={() => {
                  router.push("/mypage");
                }}
              />
            )}
          </Flex>
          {menuOnOff ? <Sidebar menu={menuHandler} menuCloser={menuOffHandler}/> : null}
          <Text>🎄 오늘까지 전달된 선물 수 : {todayCount}개 🎄</Text>
          <Text2>두어캘은 19일에 서비스가 종료되어 모든 데이터가 삭제됩니다. 종료 전 간직하고 싶은 쪽지, 선물을 따로 저장해주세요!</Text2>
        </>
      )}
    </>
  );
};
export default Header;