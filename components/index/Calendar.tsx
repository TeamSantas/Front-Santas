import styled from "styled-components";
import PresentModal from "../receivedPresents/PresentModal";
import { useEffect, useState } from "react";
import CustomModal from "../common/CustomModal";
import NumberOfReceivedPresents from "./NumberOfReceivedPresents";
import { setGetNumberOfReceivedPresents } from "../../api/hooks/useGetNumberOfReceivedPresents";

const CalendarWrapper = styled.div`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 5px auto;
  z-index: 1;
  @media (max-width: 600px) {
    margin: 5px auto;
  }
`;
const BasicDayImg = styled.img` 
  justify-content: center;
  padding: 2px;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
const BackGround = styled.img`
  position: absolute;
  width: 520px;
  top : 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  @media (max-width: 600px) {
    top : 37%;
    width: 390px;
  }
`;
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

const Table = styled.table`
  width: 400px;
  margin-top: 130px;
  @media (max-width: 600px) {
    margin-top: 70px;
    width: 310px;
  }
`;
const Calendar = ({ ismycalendar, loggedId }) => {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  // 현재 날짜 - ex) 20221129
  const date = new Date();
  const today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
  const today_day = date.getDate();

  const [presentModalShow, setPresentModalShow] = useState(false);
  const [notYetModalShow, setNotYeModalShow] = useState(false);
  const [selectedday, setSelectedDay] = useState(date.getDate());
  const [canOpenCalendar, setCanOpenCalendar] = useState(false);

  const handleShow = (d) => {
    setSelectedDay(d);
    // const selDate = `202212${d}`;
    if (ismycalendar) {
      // 열기 시도한 날이 오늘보다 앞의 날
      //   if (Number(selDate) <= Number(today)) {
      //   setCanOpenCalendar(true);
      //   setPresentModalShow(true);
      //   }
      // else {
      //   setCanOpenCalendar(false);
      //   setNotYeModalShow(true);
      // }
      setCanOpenCalendar(true);
      setPresentModalShow(true);
    } else {
      // alert("서비스가 종료되어 친구에게 쪽지를 보낼 수 없어요😞 12월 한달간 이용해 주셔서 감사합니다 🎁");
      // if (Number(selDate)< Number(today)){
      //   alert("과거로는 선물을 보낼 수 없어요 ⌛");
      // }else
      setPresentModalShow(true);
    }
  };

  // useEffect(() => {
  //   const selectedDayToCompare =
  //       Number(selectedday) < 10
  //           ? "202212" + selectedday
  //           : "202212" + selectedday;
  //   if (Number(selectedDayToCompare) <= Number(today)) {
  //     setCanOpenCalendar(true);
  //   } else {
  //     setCanOpenCalendar(false);
  //   }
  //   // console.log("선택한날>>>>>", selectedDayToCompare, "//", today,Number(selectedDayToCompare) <= Number(today));
  // }, [selectedday]);

  const handleClosePresentModal = () => setPresentModalShow(false);
  const handleCloseNotYetModal = () => setNotYeModalShow(false);
  const RenderMyCalendar = () => {
    const [receivePresentList, setReceivePresentList] = useState<any>([]);

    useEffect(() => {
      //지금 로그인한 loggedId(memeberId) 구하기 -> 상위 index 컴포넌트에서 받아옴
      const getRecivedPresentList = async () => {
        if (loggedId !== null) {
          const res = await setGetNumberOfReceivedPresents(loggedId);
          setReceivePresentList(await res.data.data);
        }
      };
      getRecivedPresentList();
    }, []);

    return (
      <>
        {days.map((day, idx) => (
          <div key={day.toString()}>
            <NumberOfReceivedPresents
              day={day}
              receivedList={receivePresentList}
            />
          </div>
        ))}
          <BackGround src={`/asset_ver2/image/back_house.png`}/>
          <Table>
              <tr>
                  <td colSpan="2"><BasicDayImg src={`/asset_ver2/image/days/day1.svg`} key={1} alt={1}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day2.svg`} key={2} alt={2}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day3.svg`} key={3} alt={3}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day4.svg`} key={4} alt={4}/></td>
              </tr>
              <tr>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day5.svg`} key={5} alt={5}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day6.svg`} key={6} alt={6}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day7.svg`} key={7} alt={7}/></td>
                  <td rowSpan="2"><BasicDayImg src={`/asset_ver2/image/days/day8.svg`} key={8} alt={8}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day9.svg`} key={9} alt={9}/></td>
              </tr>
              <tr>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day10.svg`} key={10}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day11.svg`} key={11}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day12.svg`} key={12}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day13.svg`} key={13}/></td>
              </tr>
              <tr>
                  <td colspan="2"><BasicDayImg src={`/asset_ver2/image/days/day14.svg`} key={14}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day15.svg`} key={15}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day16.svg`} key={16}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day17.svg`} key={17}/></td>
              </tr>
              <tr>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day18.svg`} key={18}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day19.svg`} key={19}/></td>
                  <td rowSpan="2"><BasicDayImg src={`/asset_ver2/image/days/day22.svg`} key={22}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day23.svg`} key={23}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day24.svg`} key={24}/></td>
              </tr>
              <tr>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day20.svg`} key={20}/></td>
                  <td><BasicDayImg src={`/asset_ver2/image/days/day21.svg`} key={21}/></td>
                  <td colSpan="2"><BasicDayImg src={`/asset_ver2/image/days/day25.svg`} key={25}/></td>
              </tr>
          </Table>
      </>
    );
  };

  const RenderFriendsCalendar = () => {
    return (
      <>
        {days.map((day, idx) => (
          <DayImage
            src={`/assets/image/days/day${idx + 1}.svg`}
            onClick={() => {
              handleShow(idx + 1);
            }}
            alt={`day${idx + 1}`}
            key={day}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <CalendarWrapper>
        {ismycalendar ? <RenderMyCalendar /> : <RenderFriendsCalendar />}
      </CalendarWrapper>
      <PresentModal
        // 선택한 캘린더 날짜로 받은선물을 조회해 보여주는 모달
        show={presentModalShow}
        onHide={handleClosePresentModal}
        selectedday={selectedday}
        ismycalendar={ismycalendar}
        // currCalUserInfo={currCalUserInfo}
      />
      <CustomModal
        // 선택한 캘린더 날짜를 보여주지 못할 때 보여주는 모달
        show={notYetModalShow}
        onHide={handleCloseNotYetModal}
        header={""}
        body={<DenyAccess />}
      />
    </>
  );
};

const DenyAccess = () => {
  return (
    <LoadingContainer>
      <img src="/assets/image/character/face_crycry.png" width="222" />
      <LoadingHeader>&quot;날짜가...지나지않아써...!&quot;</LoadingHeader>
      <p>
        (해당 날짜가 되어야 선물을 열어볼 수 있습니다. 조금만 기다려주세요!)
      </p>
    </LoadingContainer>
  );
};

export default Calendar;
