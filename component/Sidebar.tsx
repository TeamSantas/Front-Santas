import styled from "styled-components";
import {useRouter} from "next/router";
import {useState} from "react";

const Container = styled.div`
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d3c3 100%);
  border-radius: 30px 0 0 30px;
  width: 30%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  padding-left: 0;
  @media (max-width: 600px) {
    width: 80%;
  }
`

const IndexDiv = styled.div`
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(120deg, #f6d365 20%, #fda085 80%);
   
  }
`

const Index = styled.button`
  border: none;
  background-color: transparent;
  font-size: 22px;
  margin: 19px auto 19px 5px; 
  font-weight: bold;
  &:hover {
    font-size: 24px;
    color: saddlebrown;
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
  border: dashed 2px #5e4b37;
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

    return (
        <>
            {/*Background : 배경 블러처리 겸, 아무 곳이나 눌러도 사이드바 해제하는 역할*/}
            <Background onClick={props.menu}/>
            <Container>
                <Index><CloseIcon src="/asset/image/icons/close.png" onClick={props.menu}/></Index>
                <Ul>
                    {index.map((indexTitle, i) => {
                        return (
                            <IndexDiv  key={i}>
                                <Li>
                                    <Img src="/asset/image/face.svg"/>
                                    <Index onClick={() => {router.push(indexRoute[i]);}}>{indexTitle}</Index>
                                </Li>
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
