import styled from "styled-components";
import { Flex, Icons } from "../../styles/styledComponentModule";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import Sidebar from "../mypage/Sidebar";
import {getTodayPresentCount} from "../../api/hooks/useGetPresentDetail";

const Logo = styled.img`
  margin: 0px auto 0px auto;
  width: 60vw;
  max-width: 550px;
  height: auto;
  border: none;
  z-index: 5;
  @media (max-width: 600px) {
    width: 359px;
    margin: 20px auto 30px auto;
  }
  @media (max-width: 600px) and (min-height: 800px) {
    width: 359px;
    margin: 80px auto 30px auto;
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
            <Logo src={`/asset_ver2/image/title_long_logo.png`}
              onClick={() => {
                router.push("/");
                menuOffHandler();
              }}
            />
            {/*{currPath === "mypage" ? (*/}
            {/*  <Menu*/}
            {/*    src="/assets/image/icons/menu-icon.svg"*/}
            {/*    onClick={menuHandler}*/}
            {/*  />*/}
            {/*) : (*/}
            {/*  <MyPage*/}
            {/*    onClick={() => {*/}
            {/*      router.push("/mypage");*/}
            {/*    }}*/}
            {/*  />*/}
            {/*)}*/}
          </Flex>
          {menuOnOff ? <Sidebar menu={menuHandler} menuCloser={menuOffHandler}/> : null}
        </>
      )}
    </>
  );
};
export default Header;
