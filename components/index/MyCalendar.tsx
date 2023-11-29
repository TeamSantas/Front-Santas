import styled from "styled-components";
import PresentModal from "../receivedPresents/PresentModal";
import { useEffect, useState } from "react";
import CustomModal from "../common/CustomModal";
import Image from "next/image";
import CalendarDays from "./calendar-form";

interface IMyCalendar {
  todayPresentCount: number;
}

const MyCalendar = ({ todayPresentCount }: IMyCalendar) => {
  // 현재 날짜 - ex) 20221129
  const date = new Date();
  // TODO:12월 오픈떄 주석으로 바꿔야 함
  // let today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
  let today = `20231215`;
  if (process.env.NODE_ENV === "development") today = `20231215`;
  const today_day = date.getDate();
  const [presentModalShow, setPresentModalShow] = useState(false);
  const [notYetModalShow, setNotYeModalShow] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [canOpenCalendar, setCanOpenCalendar] = useState(false);

  const handleShow = (selectedDay: number) => {
    if (todayPresentCount < 3) {
      alert("하루에 쪽지를 3개 이상 보내야 열어볼 수 있어요.");
      return;
    }

    setSelectedDay(selectedDay);

    let selDate: string = `202312${selectedDay}`;

    // 열기 시도한 날이 오늘보다 앞의 날
    if (Number(selDate) <= Number(today)) {
      setCanOpenCalendar(true);
      setPresentModalShow(true);
    } else {
      setCanOpenCalendar(false);
      setNotYeModalShow(true);
    }
  };

  useEffect(() => {
    let selectedDayToCompare: string = "202312" + selectedDay;
    if (process.env.NODE_ENV === "development")
      selectedDayToCompare = "20231215";
    // selectedDayToCompare = Number(selectedDay) < 10
    //     ? "2023120" + selectedDay
    //     : "202312" + selectedDay;
    if (Number(selectedDayToCompare) <= Number(today)) {
      setCanOpenCalendar(true);
    } else {
      setCanOpenCalendar(false);
    }
  }, [selectedDay, today]);

  const handleClosePresentModal = () => setPresentModalShow(false);
  const handleCloseNotYetModal = () => setNotYeModalShow(false);

  return (
    <>
      <CalendarWrapper>
        <CalendarDays name={"나"} handleShow={handleShow} />
      </CalendarWrapper>
      {canOpenCalendar ? (
        <PresentModal
          // 선택한 캘린더 날짜로 받은선물을 조회해 보여주는 모달
          show={presentModalShow}
          onHide={handleClosePresentModal}
          selectedDay={selectedDay}
          isMyCalendar={true}
        />
      ) : (
        <CustomModal
          // 선택한 캘린더 날짜를 보여주지 못할 때 보여주는 모달
          show={notYetModalShow}
          onHide={handleCloseNotYetModal}
          header={""}
          body={<DenyAccess />}
          //TODO: adfit 아이디 추가
        />
      )}
    </>
  );
};

const DenyAccess = () => {
  return (
    <LoadingContainer>
      <Image
        src="/assets/image/character/face_crycry.png"
        width="222"
        height={"222"}
        alt={"우는사진"}
      />
      <LoadingHeader>&quot;날짜가 안 지났어!&quot;</LoadingHeader>
      <p>
        (해당 날짜가 되어야 선물을 열어볼 수 있습니다. 조금만 기다려주세요!)
      </p>
    </LoadingContainer>
  );
};

export default MyCalendar;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -38%);
  text-align: center;
`;
const LoadingHeader = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;
const CalendarWrapper = styled.div`
  border-radius: 10px;
  margin: 0px auto;
  z-index: 1;
  @media (max-width: 600px) {
    margin: 5px auto;
  }
`;
