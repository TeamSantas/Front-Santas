import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  /* background-color: #ac473d; */
  /* background-color: #181c23; */
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background-color: #3c6c54;
  height: 50px;
  text-align: center;
  line-height: 50px;
`;
const BannerText = styled.div`
  margin: 0;
  color: #fff;
  font-size: 1.2em;
  cursor: default;
  white-space: normal;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StyledA = styled.a`
  text-decoration: underline;
  color: white;
  &:hover {
    color: #ac473d;
    text-decoration: underline;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  color: #fff;
  right: 20px;
  top: 0;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 16px;
    display: none;
  }
`;

const BottomCloseBtn = styled.div`
  display: none;
  position: absolute;
  background-color: #3c6c54;
  color: #fff;
  top: 100%;
  left: 50%;
  z-index: 1;
  line-height: 0;
  width: 60px;
  height: 22px;
  border-radius: 0 0 6px 6px;
  transform: translateX(-50%);
  line-height: 18px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 14px;
    display: block;
  }
`;

function Banner() {
  const [onHide, setOnHide] = useState(false);

  const handleDisplay = () => {
    setCookie("noticeRead", true);
    setOnHide(true);
  };

  useEffect(() => {
    const readStatus = getCookie("noticeRead");
    // @ts-ignores
    setOnHide(readStatus);
  }, []);

  const router = useRouter();

  return (
    <>
      {onHide ||
      router.asPath === "/ending" ||
      router.asPath === "/endingbridge" ? null : (
        <BannerContainer>
          <BannerText>
            {/* 🎉 이벤트 당첨자 발표 🎉 혹시 내가 당첨 😳? 👉{" "} */}
            💗서비스를 사랑해주셔서 감사합니다!💗 👉{" "}
            <StyledA href="/endingbridge">엔딩페이지로 가기</StyledA>
            <CloseBtn onClick={handleDisplay}>☓ 닫기</CloseBtn>
          </BannerText>
          <BottomCloseBtn onClick={handleDisplay}>☓ 닫기</BottomCloseBtn>
        </BannerContainer>
      )}
    </>
  );
}

export default Banner;
