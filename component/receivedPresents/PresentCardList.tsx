import { render } from "@react-three/fiber";
import "bootstrap/dist/css/bootstrap.css";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { setGetDayPresents } from "../../api/hooks/useGetDayPresents";
import PresentService from "../../api/PresentService";
import { storeContext } from "../../store/Store";
import { Flex } from "../../styles/styledComponentModule";
import Card from "./Card";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Default = styled.img`
  background-image: url(/assets/image/present/default_present_bg.svg);
  width: 100%;
`;

const PresentCardList = ({ selectedday }) => {
  const { storeUserData } = useContext(storeContext);
  const receiverId = storeUserData.id;
  const receivedDay =
    selectedday < 10 ? `2022-12-0${selectedday}` : `2022-12-${selectedday}`;

  const [receivedPresentList, setReceivedPresentList] = useState([]);

  useEffect(() => {
    const initReceivedPresentList = async () => {
      const res = await setGetDayPresents(receiverId, receivedDay);
      // console.log("receivedPresentList >>> ", res.content)
      setReceivedPresentList(res.content);
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
      {receivedPresentList ? (
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
          <h1>{defaultText}</h1>
          <Default />
        </>
      )}
    </>
  );
};

export default PresentCardList;
