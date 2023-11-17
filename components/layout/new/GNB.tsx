import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Gnb = () => {
  const router = useRouter();
  const [activeOption, setActiveOption] = useState(null);
  const isHome = router.pathname === "/";

  // TODO: 전역 상태관리 - 아이콘 클릭 여부 / 해당하는 모달 등 꺼졌을 때 default로 설정되도록
  const handleClickMenu = (option) => {
    setActiveOption(option);

    switch (option) {
      case "friends":
        // TODO: 친구 목록 창 띄우기
        break;
      case "snowball":
        router.push("/snowball");
        break;
      case "message":
        router.push("/message");
        break;
      case "home":
        router.push(isHome ? "/town" : "/");
        break;
      case "heart":
        // TODO: 좋아요 모달 켜기
        break;
      default:
        break;
    }
  };

  const getImagePath = (option) => {
    const condition =
      option === "home"
        ? activeOption === option && isHome
        : activeOption === option;

    return `/assets/image/layout/${option}${
      condition ? "-click" : "-default"
    }.svg`;
  };

  return (
    <Wrapper>
      <IconWrapper>
        <Img
          src={getImagePath("friends")}
          onClick={() => handleClickMenu("friends")}
        />
        <Img
          src={getImagePath("snowball")}
          onClick={() => handleClickMenu("snowball")}
        />
        <Img
          src={getImagePath("home")}
          onClick={() => handleClickMenu("home")}
        />
        <Img
          src={getImagePath("message")}
          onClick={() => handleClickMenu("message")}
        />
        <Img
          src={getImagePath("heart")}
          onClick={() => handleClickMenu("heart")}
        />
      </IconWrapper>
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  background-color: #1a2838;
`;

const IconWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 500px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px;
  background-color: #1a2838;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
