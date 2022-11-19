import styled from "styled-components";
import {useRouter} from "next/router";
import {useState} from "react";

const Container = styled.div`
  background-color: #3C6C54;
  border-radius: 30px 0 0 30px;
  width: 30%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  padding-left: 0;
  border: solid 3px white;
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 650px) {
    width: 70%;
    border-radius: 15px 0 0 15px;
  }
`

const IndexDiv = styled.div`
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`

const Index = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  width: ${(props)=>(props.back ? "50px" : "100%")};
  filter: ${(props)=>(props.back ? "invert(100%) sepia(100%) saturate(2%) hue-rotate(235deg) brightness(115%) contrast(101%)" : "transparent")};
  padding: 15px;
  font-size: 22px;
  margin: 0 auto 0 5px; 
  font-weight: bold;
  &:hover {
    font-size: 24px;
    color: #AC473D;
  }
  @media (max-width: 600px) {
    font-size: 15px;
  }
`
const CloseIcon = styled.img`
  width: 50px;
  transform: scaleX(-1);
  cursor: pointer;
`
const Ul = styled.ul`
  padding-left: 0;
`
const Li = styled.li`
  padding: 0 0 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`
const Hr = styled.hr`
  border: dashed 2px white;
  margin: 0;
`

const Img = styled.img`
  margin-top: -5px;
`

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: .7;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #191C21;
`

const Sidebar = (props) => {
    const router = useRouter();
    const index = [
        "알림설정",
        "개인정보 처리방침",
        "Contact to Us",
        "로그아웃",
        "v.0.0.1"
    ]
    const indexRoute = [
        "/",
        "/",
        "/",
        "/",
        "/"
    ]
    // const [toggleValue, setToggleValue] = useState(false);
    return (
        <>
            {/*Background : 배경 블러처리 겸, 아무 곳이나 눌러도 사이드바 해제하는 역할*/}
            <Background onClick={props.menu}/>
            <Container>
                <Index back><CloseIcon src="/assets/image/icons/close.png" onClick={props.menu}/></Index>
                <Ul>
                    {index.map((indexTitle, i) => {
                        return (
                            <IndexDiv  key={i}>
                                <Li>
                                    <Img src="/assets/image/face.svg"/>
                                    <Index onClick={() => {router.push(indexRoute[i]);}}>{indexTitle}</Index>
                                </Li>
                                {/*{i===0? :null}*/}
                                <Hr/>
                            </IndexDiv>
                        )
                    })}
                </Ul>
            </Container>
        </>
    )
}
export default Sidebar
