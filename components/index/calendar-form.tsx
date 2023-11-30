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
      <Container>
        <Title>{name}의 캘린더</Title>
        <BackGround
          src={`/asset_ver2/image/layout/back_house.png`}
          width={`450`}
          height={`1000`}
          alt={"배경"}
        />
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
        </Container>
      </>
    );
  };

  return (
    <TitleContainer>
      <CalendarForm />
    </TitleContainer>
  );
};

export default CalendarDays;

const TitleContainer = styled.div`
  position: relative;
  top: 5vh;
  text-align: center;
  @media (max-height: 700px) {
    top: -3vh;
  }
  @media (max-height: 700px) {
    top: 0;
  }
  @media (max-width: 300px) {
    top: 7vh;
  }
`;
const Table = styled.table`
  width: 55%;
  height: auto;
  position: absolute;
  bottom: 12%;
  z-index: -1;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding-bottom: constant(safe-area-inset-bottom);
`;

const BackGround = styled(Image)`
  position: relative;
  width: 68%;
  height: auto;
  z-index: -1;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: constant(safe-area-inset-bottom);
`;

const Title = styled.h1`
  font-family: "LOTTERIACHAB", LOTTERIACHAB, sans-serif;
  width: 90%;
  height: auto;
  position: relative;
  left: 0;
  margin: 0px auto;
  font-size: 30px;
  text-align: center;
  @media (max-height: 700px) {
    font-size: 20px;
    width: 200px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
    width: 200px;
  }
`;
const Container = styled.div`
  position: relative;
  max-width: 700px;
`;