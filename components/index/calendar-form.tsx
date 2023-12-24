import styled from "styled-components";
import ImageMap from "image-map";
import { useEffect, useRef, useState } from "react";
import React from "react";
import NumberOfReceivedPresents from "./NumberOfReceivedPresents";

interface CalendarFormProps {
  name: string;
  handleShow;
}
const areas = [
  { coords: "93,360,477,534" },
  { coords: "491,360,675,531" },
  { coords: "691,360,872,532" },
  { coords: "888,360,1074,532" },
  { coords: "97,544,280,718" },
  { coords: "294,545,475,718" },
  { coords: "492,545,676,720" },
  { coords: "690,546,872,900" },
  { coords: "891,546,1073,713" },
  { coords: "95,731,279,901" },
  { coords: "294,730,478,901" },
  { coords: "675,899,492,731" },
  { coords: "890,727,1074,899" },
  { coords: "96,912,480,1086" },
  { coords: "494,912,674,1085" },
  { coords: "691,913,874,1085" },
  { coords: "890,913,1074,1084" },
  { coords: "95,1099,279,1271" },
  { coords: "291,1098,479,1272" },
  { coords: "96,1284,280,1453" },
  { coords: "292,1283,480,1452" },
  { coords: "492,1099,675,1459" },
  { coords: "692,1099,874,1271" },
  { coords: "890,1099,1074,1270" },
  { coords: "691,1284,1075,1455" },
];

const CalendarDays = ({ name, handleShow }: CalendarFormProps) => {
  const [positions, setPositions] = useState(Array(25).fill({}));
  const refs = useRef(
    Array(25)
      .fill(null)
      .map(() => React.createRef<HTMLAreaElement>())
  );
  const today = new Date(); // 현재 날짜와 시간을 가져옴
  const christmas = new Date(today.getFullYear(), 11, 25); // 같은 연도의 크리스마스 날짜를 설정 (월은 0부터 시작)

  const srcPath =
    // today < christmas // 오늘이 크리스마스 이전이면
    // ? "/asset_ver2/image/layout/d-1.png" // 이 이미지 사용
    "/asset_ver2/image/layout/d-0.png"; // 크리스마스 당일 혹은 이후면 이 이미지 사용
  const setResizedPosition = () => {
    const newPosition = refs.current.map((ref) => {
      const [left, top, _, __] = ref.current.coords.split(",");
      return { left, top };
    });
    setPositions(newPosition);
  };

  useEffect(() => {
    ImageMap("img[usemap]");

    const observer = new MutationObserver(setResizedPosition);

    refs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current, { attributes: true, childList: true });
      }
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <CalendarContainer>
      <Title
        color={"#1E344F"}
        textShadow={
          "0 0 8px #fff, 0 0 2px #fff, 0 0 8px #fff, 0 0 2px #00fff7, 0 0 2px #0251b1, 0 0 8px #62c1db, 0 0 8px #4eccff, 0 0 5px #69ebff"
        }
      >
        {name} 의 캘린더
      </Title>
      <ImgWrapper>
        <Background
          src={srcPath}
          useMap="#my-map"
          alt="캘린더"
          onLoad={setResizedPosition}
        />
        <map name="my-map">
          {areas.map((area, index) => {
            return (
              <React.Fragment key={`${area.coords}`}>
                <area
                  {...area}
                  ref={refs.current[index]}
                  key={`${index}_${area.coords}`}
                  shape="rect"
                  alt={`day${index + 1}`}
                  title={`day${index + 1}`}
                  onClick={() => handleShow(index + 1)}
                  style={{ cursor: "pointer" }}
                />
                <NumberOfReceivedPresents
                  day={index + 1}
                  position={
                    index === 11
                      ? { left: positions[6].left, top: positions[10].top }
                      : positions[index]
                  }
                />
              </React.Fragment>
            );
          })}
        </map>
      </ImgWrapper>
    </CalendarContainer>
  );
};

export default CalendarDays;

const ImgWrapper = styled.div`
  transform: translateX(-50%);
  position: relative;
  left: 50%;
  width: fit-content;
  height: fit-content;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  position: absolute;
  width: 100%;
  height: calc(100dvh - 220px);
  left: 50%;
  transform: translateX(-50%);
`;

const Background = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;

  @media (max-height: 670px) {
    max-width: 300px;
  }
  @media (max-width: 350px) {
    max-width: unset;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: "LOTTERIACHAB", LOTTERIACHAB, sans-serif;
  margin: 0 auto;
  margin-top: 25vh;
  max-width: 350px;
  text-align: center;

  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  text-shadow: ${(props) => props.textShadow};

  @media (max-height: 800px) {
    margin-top: 15vh;
  }
  @media (max-height: 900px) {
    margin-top: 5px;
  }
`;

const RedCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Number = styled.span`
  color: white;
  font-size: 10px; /* Adjust the font size as needed */
  font-weight: bold;
`;
