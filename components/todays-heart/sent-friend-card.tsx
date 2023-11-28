import styled from "styled-components";
import { Flex } from "../../styles/styledComponentModule";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { postMemberPick } from "../../api/hooks/useHeart";
import { FriendsData } from "../../util/type";

interface ISentFriendsCard {
  isPicked: boolean;
  friend: FriendsData;
}

const SentFriendsCard = ({ isPicked, friend }: ISentFriendsCard) => {
  const [picked, setPicked] = useState(isPicked);

  const handleClickSendHeart = async (friend) => {
    setPicked(true);
    try {
      const response = await postMemberPick(friend);
      if (!response) {
        alert("하트 보내기 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.");
        setPicked(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FriendCard>
      <AlignedFlex>
        <Img
          src={
            friend.profileImgUrl.includes("http")
              ? friend.profileImgUrl
              : "/assets/image/character/character.svg"
          }
        />
        <FriendsName>{friend.name}</FriendsName>
      </AlignedFlex>

      <Flex>
        <SendHeartBtn
          picked={picked ? "true" : "false"}
          onClick={() => handleClickSendHeart(friend)}
        >
          {picked ? "전송 완료 ♥︎" : "하트 보내기"}
        </SendHeartBtn>
      </Flex>
    </FriendCard>
  );
};

export default SentFriendsCard;

export const AlignedFlex = styled(Flex)`
  align-items: center;
`;

const SendHeartBtn = styled(Button)<{ picked: string }>`
  background-color: ${({ picked }) =>
    picked === "true" ? "#38805B" : "#d84d23"};
  border-color: ${({ picked }) => (picked === "true" ? "#38805B" : "#d84d23")};
  border-radius: 13px;
  font-size: 14px;
  font-family: NanumSquare Neo OTF;
  font-weight: 800;

  @media (max-width: 600px) {
    font-size: small;
  }
  @media (max-width: 300px) {
    width: 70px;
    font-size: x-small;
  }
`;

const FriendsName = styled.div`
  margin-left: 5px;
  font-size: 16px;

  @media (max-width: 300px) {
    max-width: 40px;
    font-size: small;
  }
`;

const FriendCard = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  background: #1c3249;
  border-radius: 12px;
  z-index: 5;
  color: white;
  padding: 1rem;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
    height: 62px;
    font-size: 24px;
  }
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  border-radius: 50px;
`;