import styled from "styled-components";
import PresentModal from "../receivedPresents/PresentModal";
import { useState } from "react";
import CalendarDays from "./calendar-form";
import { useAtom } from "jotai";
import { loginUserDataAtom } from "../../store/globalState";
import { useRouter } from "next/router";

interface IOtherCalendar {
  name: string;
}

const OtherCalendar = ({ name }: IOtherCalendar) => {
  // 현재 날짜 - ex) 20221129
  const date = new Date();
  // TODO:12월 오픈떄 주석으로 바꿔야 함
  // let today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
  // let today = `20231215`;
  // if (process.env.NODE_ENV === "development") today = `20231215`;
  const today_day = date.getDate();
  const [presentModalShow, setPresentModalShow] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const handleClosePresentModal = () => setPresentModalShow(false);
  const [storeUserData] = useAtom(loginUserDataAtom);
  const isLoginUser = storeUserData.id !== -1;
  const router = useRouter();

  const handleShow = (selectedDay: number) => {
    if (!isLoginUser) {
      const confirmText = `쪽지를 보낼 때에는 로그인이 필요해요.\n로그인하러 갈까요?`;
      if (confirm(confirmText)) {
        router.push("/login");
      }
      return;
    }
    setSelectedDay(selectedDay);

    let selectedDayToCompare: string = "202312" + selectedDay;
    selectedDayToCompare = Number(selectedDay) < 10
      ? "2023120" + selectedDay
      : "202312" + selectedDay;

    const today = Number(today_day) < 10
      ? "2023120" + today_day
      : "202312" + today_day;

    let selDate: string = `202312${selectedDay}`;
    console.log("====>selectedDayToCompare",selectedDayToCompare);
    console.log("====>today",today);
    console.log("====>",Number(selectedDayToCompare) < Number(today));
    if (Number(selectedDayToCompare) < Number(today)) {
      alert("과거로는 선물을 보낼 수 없어요 ⌛");
    } else setPresentModalShow(true);
  };

  return (
    <>
      <CalendarWrapper>
        <CalendarDays name={name} handleShow={handleShow} />
      </CalendarWrapper>
      {presentModalShow && (
        <PresentModal
          // 선택한 캘린더 날짜로 쪽지 보내는 모달을 띄움
          show={presentModalShow}
          onHide={handleClosePresentModal}
          selectedDay={selectedDay}
          isMyCalendar={false}
        />
      )}
    </>
  );
};

export default OtherCalendar;
const CalendarWrapper = styled.div`
  border-radius: 10px;
  margin: 0px auto;
  z-index: 1;
  @media (max-width: 600px) {
    margin: 5px auto;
  }
`;
