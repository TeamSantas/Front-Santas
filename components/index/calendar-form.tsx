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
    return (
      <>
        <BackGround
          src={`/asset_ver2/image/layout/back_house.png`}
          width={`450`}
          height={`1000`}
          alt={"배경"}
        />
        <>
          <Title>{name}의 캘린더</Title>
          <Table>
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
          </Table>
        </>
      </>
    );
  };

  return <CalendarForm />;
};

export default CalendarDays;

const Title = styled.h1`
  position: fixed;
  font-family: "LOTTERIACHAB", LOTTERIACHAB, sans-serif;
  max-width: 260px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 80%;
`;

const Table = styled.table`
  position: fixed;
  width: 90vw;
  max-width: 290px;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom) + 125px);

  @media (max-width: 350px) {
    max-width: unset;
    width: 80%;
    bottom: calc(env(safe-area-inset-bottom) + 110px);
  }
`;

const BackGround = styled(Image)`
  width: 100%;
  max-width: 350px;
  height: auto;
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom) + 60px);
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
