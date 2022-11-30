import { render } from "@react-three/fiber";
import "bootstrap/dist/css/bootstrap.css";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { setGetDayPresents } from "../../api/hooks/useGetDayPresents";
import { setGetMember } from "../../api/hooks/useGetMember";
import PresentService from "../../api/PresentService";
import { storeContext } from "../../store/Store";
import { Flex } from "../../styles/styledComponentModule";
import { MemberData } from "../../util/type";
import Card from "./Card";
import {getLoggedMember} from "../../api/hooks/useMember";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Default = styled.img`
  background-image: url(/assets/image/present/default_present_bg.svg);
  width: 100%;
`;

const PresentCardList = ({ selectedday }) => {
  const [receiverId, setReceiverId] = useState<MemberData>();

  // 현재 로그인한 유저의 정보 - id 값
  const getMemberData = async () => {
    try {
      const res = await setGetMember();
      setReceiverId(res.data.data.member.id);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMemberData();
  }, []);

  const receivedDay =
    selectedday < 10 ? `2022-12-0${selectedday}` : `2022-12-${selectedday}`;

  const [receivedPresentList, setReceivedPresentList] = useState([]);

  const initReceivedPresentList = async () => {
    const res = await setGetDayPresents(receiverId, receivedDay);
    console.log("receivedPresentList >>> ", res.content)
    setReceivedPresentList(res.content);
  };

  useEffect(() => {
    const initReceivedPresentList = async () => {
      try {
        const res = await setGetDayPresents(receiverId, receivedDay);
        console.log("receivedPresentList >>> ", res);
        setReceivedPresentList(res.data.data.content);
      } catch (e) {
        console.log(e);
      }
    };
    initReceivedPresentList();
  }, []);

  // console.log(receiverId, receivedDay);
  // console.log("receivedPresentList >>> ", receivedPresentList);
  const defaultText = `아직 받은 선물이 없어요. 
먼저 산타가 되어보는 건 어때요?🎅 
  `;
  return (
    <>
      {receivedPresentList.length > 0 ? (
        <TabFlex>
          {receivedPresentList.map((present) => (
            <Card
              key={present.id}
              id={present.id}
              thumbnail={present.imageURL}
            />
          ))}
        </TabFlex>
      ) : (
        // TODO : default 사진 CSS 수정 필요한지 확인해보기
        <>
          <h5>{defaultText}</h5>
          <Default />
        </>
      )}
    </>
  );
};

export default PresentCardList;
