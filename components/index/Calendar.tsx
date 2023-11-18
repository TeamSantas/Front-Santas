import styled from "styled-components";
import PresentModal from "../receivedPresents/PresentModal";
import { useEffect, useState } from "react";
import CustomModal from "../common/CustomModal";
import NumberOfReceivedPresents from "./NumberOfReceivedPresents";
import { setGetNumberOfReceivedPresents } from "../../api/hooks/useGetNumberOfReceivedPresents";
import Image from "next/image";
import WideDay from "./day/WideDay";
import BasicDay from "./day/BasicDay";
import LongDay from "./day/LongDay";

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
      const dayRow_1 = [1,2,3,4];
      const dayRow_2 = [5,6,7,8,9];
      const dayRow_3 = [10,11,12,13];
      const dayRow_4 = [14,15,16,17];
      const dayRow_5 = [18,19,22,23,24];
      const dayRow_6 = [20,21,25];

    return (
      <TitleContainer>
         <Title>23 컴퓨터공학과 팀산타즈의 캘린더</Title>
        {days.map((day, idx) => (
          <div key={day.toString()}>
            <NumberOfReceivedPresents
              day={day}
              receivedList={receivePresentList}
            />
          </div>
        ))}
          <BackGround src={`/asset_ver2/image/layout/back_house.png`} width={`450`} height={`1000`}/>
          <Table>
              <tr>
                  {dayRow_1.map((day,idx)=>{
                      if(day===1) return <WideDay day={day} idx={idx}/>
                      else return <BasicDay day={day} idx={idx}/>
                  })}
              </tr>
              <tr>
                  {dayRow_2.map((day,idx)=>{
                      if(day===8) return <LongDay day={day} idx={idx}/>
                      else return <BasicDay day={day} idx={idx}/>
                  })}
              </tr>
              <tr>
                  {dayRow_3.map((day,idx)=><BasicDay day={day} idx={idx} key={idx}/>)}
              </tr>
              <tr>
                  {dayRow_4.map((day,idx)=>{
                      if(day===14) return <WideDay day={day} idx={idx}/>
                      else return <BasicDay day={day} idx={idx}/>
                  })}
              </tr>
              <tr>
                  {dayRow_5.map((day,idx)=>{
                      if(day===22) return <LongDay day={day} idx={idx}/>
                      else return <BasicDay day={day} idx={idx}/>
                  })}
              </tr>
              <tr>
                  {dayRow_6.map((day,idx)=>{
                      if(day===25) return <WideDay day={day} idx={idx}/>
                      else return <BasicDay day={day} idx={idx}/>
                  })}
              </tr>
          </Table>
      </TitleContainer>
    );
  };

  const RenderFriendsCalendar = () => {
    return (
      <>
          <BackGround src={`/asset_ver2/image/layout/back_house.png`}/>
          {/*TODO:친구달력 레이아웃도 위처럼 만들기(너무 겹치면 컴포넌트로 빼주기)*/}
        {/*{days.map((day, idx) => (*/}
        {/*  <BasicDay*/}
        {/*    day={}*/}
        {/*    onClick={() => {*/}
        {/*      handleShow(idx + 1);*/}
        {/*    }}*/}
        {/*    alt={`day${idx + 1}`}*/}
        {/*    key={day}*/}
        {/*  />*/}
        {/*))}*/}
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




const CalendarWrapper = styled.div`
  border-radius: 10px;
  margin: 0px auto;
  z-index: 1;
  @media (max-width: 600px) {
    margin: 5px auto;
  }
`;
const BackGround = styled(Image)`
  width: 480px;
  height: auto;
  position: fixed;
  bottom: 60px;
  z-index: -1;
  margin: 0 auto;
  left: 0;
  right: 0;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 390px;
  }
  @media (max-width: 380px) {
    width: 340px;
  }
  @media (max-width: 300px) {
    width: 280px;
  }
  @media (min-width: 1000px) {
    width: 360px;
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
  width: 380px;
  position: fixed;
  bottom: 165px;
  z-index: -1;
  margin: 0 auto;
  left: 0;
  right: 0;
  @media (max-width: 600px) {
    bottom: 135px;
    width: 315px;
  }
  @media (max-width: 380px) {
    bottom: 125px;
    width: 280px;
  }
  @media (max-width: 300px) {
    bottom: 120px;
    width: 220px;
  }
  @media (min-width: 1000px) {
    bottom: 120px;
    width: 300px;
  }
`;
const TitleContainer = styled.div`
  position: relative;
  top:5vh;
  text-align: center;
  @media (max-height: 700px) {
    top: -3vh;
  }
  @media (max-height: 700px) {
    top: -3vh;
  }  
  @media (max-width: 300px) {
  top: 7vh;
  }
`;
const Title = styled.h1`
  font-family: "LOTTERIACHAB", LOTTERIACHAB, sans-serif;
  width: 260px;
  margin: 0 auto;
  font-size: 30px;
  text-align: center;
  @media (max-height: 700px) {
    font-size: 20px;
    width: 200px;
  }
  @media (max-width: 400px) {
    font-size: 23px;
    width: 200px;
   }
`;