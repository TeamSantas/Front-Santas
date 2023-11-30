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
        {/*TODO: 캘린더 받은 개수 뿌려주는거 각 day 컴포넌트들 안에 넣어줘야 할지도! day 있으니까*/}
        {/*{days.map((day, idx) => (*/}
        {/*  <div key={day.toString()}>*/}
        {/*    <NumberOfReceivedPresents*/}
        {/*      day={day}*/}
        {/*      receivedList={receivePresentList}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*))}*/}
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
  width: 380px;
  height: auto;
  position: fixed;
  bottom: 165px;
  z-index: -1;
  margin: 0 auto;
  left: 0;
  right: 0;
  @media (max-height: 1000px) {
    bottom: 125px;
    width: 290px;
  }
  @media (max-height: 800px) {
    bottom: 112px;
    width: 240px;
  }
  @media (max-height: 600px) {
    bottom: 110px;
    width: 210px;
  }
  @media (max-height: 480px) {
    bottom: 105px;
    width: 170px;
  }
`;
const Title = styled.h1`
  font-family: "LOTTERIACHAB", LOTTERIACHAB, sans-serif;
  width: 260px;
  height: auto;
  margin: -10px auto;
  font-size: 30px;
  text-align: center;
  @media (max-height: 700px) {
    font-size: 20px;
    width: 200px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
    width: 200px;
  }
  @media (max-width: 300px) {
    display: none;
  }
`;
const BackGround = styled(Image)`
  width: 290px;
  height: auto;
  position: fixed;
  bottom: 60px;
  z-index: -1;
  margin: 0 auto;
  left: 0;
  right: 0;
  overflow: hidden;
  @media (max-height: 1000px) {
    width: 350px;
  }
  @media (max-height: 800px) {
    width: 290px;
  }
  @media (max-height: 600px) {
    width: 260px;
  }
  @media (max-height: 480px) {
    width: 220px;
  }
  @media (max-height: 300px) {
    width: 200px;
  }바
`;
