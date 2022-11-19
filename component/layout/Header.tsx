import styled from "styled-components";
import { Flex, Icons } from "../../styles/styledComponentModule";
import { useRouter } from "next/router";
import {useState} from "react";
import Sidebar from "../Sidebar";

const Logo = styled.button`
    margin-top: 20px;
    margin-bottom: 20px;
    background: none;
    background-image: url("/asset/image/Logo.svg");
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
    width: 80px;
    height: auto;
    margin-right: 2%;
    cursor:pointer;
    background-image: url("/asset/image/face.svg");
    z-index: 5;
    @media (max-width: 600px) {  
      width: 52px;
     margin-left: 0;
    }
`;

const Menu = styled.img`
  margin: 20px;
  width: 55px;
  height: auto;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(45deg) brightness(104%) contrast(103%);
  cursor:pointer;
  color:white;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    margin-right: 0;
  }
`

const Header = () => {
    const router = useRouter();
    const currPath = router.pathname.slice(1);
    const [menuOnOff, setMenuOnOff] = useState(false);
    const menuHandler = () => setMenuOnOff(!menuOnOff);
    const menuOffHandler = () => setMenuOnOff(false);
    //로고를 누르면 사이드바 닫힘
    //햄버거 바를 누르면 사이드바 열림
    return (
        <>
            <Flex>
                <Logo onClick={() => {router.push("/"); menuOffHandler();}}></Logo>
                { currPath === 'mypage' ?
                    <Menu src="/asset/image/icons/menu-icon.svg" onClick={menuHandler}/>
                    : <MyPage onClick={() => {router.push("/mypage"); }}/>}
            </Flex>
            {menuOnOff ? <Sidebar menu={menuHandler}/> : null}
        </>
    );
};
export default Header;
