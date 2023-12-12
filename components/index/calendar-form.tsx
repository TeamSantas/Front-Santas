import styled from "styled-components";
import Image from "next/image";
import BasicDay from "./day/BasicDay";
import LongDay from "./day/LongDay";
import WideDay from "./day/WideDay";

interface CalendarFormProps {
  name: string;
  handleShow;
}
const CalendarDays = ({ name, handleShow }: CalendarFormProps) => {
  const CalendarForm = () => {
    const dayRow_1 = [1, 2, 3, 4];
    const dayRow_2 = [5, 6, 7, 8, 9];
    const dayRow_3 = [10, 11, 12, 13];
    const dayRow_4 = [14, 15, 16, 17];
    const dayRow_5 = [18, 19, 22, 23, 24];
    const dayRow_6 = [20, 21, 25];
    const title = `${name} 의 캘린더`;
    return (
      <>
        <Title
          color={"#1E344F"}
          textShadow={
            "0 0 12px #fff, 0 0 2px #fff, 0 0 12px #fff, 0 0 2px #00fff7, 0 0 8px #0251b1, 0 0 22px #62c1db, 0 0 22px #4eccff, 0 0 10px #69ebff"
          }
        >
          {title}
        </Title>
        <BackGround
          src={`/asset_ver2/image/layout/house.png`}
          width={`450`}
          height={`1000`}
          alt={"배경"}
        />
        <CalendarWrapper>
          <table>
            <tbody>
              <tr>
                {dayRow_1.map((day, idx) => {
                  if (day === 1)
                    return (
                      <WideDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                  else
                    return (
                      <BasicDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                })}
              </tr>
              <tr>
                {dayRow_2.map((day, idx) => {
                  if (day === 8)
                    return (
                      <LongDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                  else
                    return (
                      <BasicDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                })}
              </tr>
              <tr>
                {dayRow_3.map((day, idx) => (
                  <BasicDay
                    day={day}
                    key={day}
                    handleShow={() => handleShow(day)}
                  />
                ))}
              </tr>
              <tr>
                {dayRow_4.map((day, idx) => {
                  if (day === 14)
                    return (
                      <WideDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                  else
                    return (
                      <BasicDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                })}
              </tr>
              <tr>
                {dayRow_5.map((day, idx) => {
                  if (day === 22)
                    return (
                      <LongDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                  else
                    return (
                      <BasicDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                })}
              </tr>
              <tr>
                {dayRow_6.map((day, idx) => {
                  if (day === 25)
                    return (
                      <WideDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                  else
                    return (
                      <BasicDay
                        day={day}
                        key={day}
                        handleShow={() => handleShow(day)}
                      />
                    );
                })}
              </tr>
            </tbody>
          </table>
        </CalendarWrapper>
      </>
    );
  };

  return <CalendarForm />;
};

export default CalendarDays;

const CalendarWrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 290px;
  bottom: calc(env(safe-area-inset-bottom) + 105px);
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 350px) {
    width: 83%;
    bottom: calc(env(safe-area-inset-bottom) + 100px);
  }
`;

const Title = styled.h1`
  font-family: "LOTTERIACHAB", LOTTERIACHAB, sans-serif;
  margin: 0 auto;
  margin-top: 25vh;
  max-width: 260px;
  text-align: center;

  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  text-shadow: ${(props) => props.textShadow};

  @media (max-height: 600px) {
    margin-top: 10vh;
  }
  @media (max-height: 800px) {
    margin-top: 13px;
  }
`;

const BackGround = styled(Image)`
  width: 100%;
  max-width: 350px;
  height: auto;
  position: fixed;
  bottom: 80px;
  z-index: -1;
  margin: 0 auto;
  left: 0;
  right: 0;
  overflow: hidden;

  @media (max-width: 350px) {
    max-width: unset;
    width: 100%;
  }
`;
