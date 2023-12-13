import styled from "styled-components";
import { Flex } from "../../styles/styledComponentModule";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { modalStateAtom } from "../../store/globalState";
import { FriendsData } from "../../util/type";
import KakaoAdFit from "../advertisement/KakaoAdFit";

interface IFriendsList {
  friendsData: FriendsData[];
  isLoading: boolean;
}

const FriendsList = ({ friendsData, isLoading }: IFriendsList) => {
  const router = useRouter();
  const [, setShowModal] = useAtom(modalStateAtom);

  const RenderFriendCardContents = ({
    profileImgUrl,
    name,
    invitationLink,
  }) => {
    const goFriendsCalendar = () => {
      router.push(`/${invitationLink}`);
      setShowModal({
        label: "friends",
        show: false,
      });
    };

    return (
      <>
        <AlignedFlex>
          <Img src={profileImgUrl || "/assets/image/character/character.svg"} />
          <FriendsName>{name}</FriendsName>
        </AlignedFlex>
        <Flex>
          <GoFriendsCalendarBtn onClick={goFriendsCalendar}>
            친구 캘린더로 가기
          </GoFriendsCalendarBtn>
        </Flex>
      </>
    );
  };

  return (
    <Container>
      {!isLoading && friendsData.length < 1 ? (
        <LoadingContainer>
          <img
            src="/assets/image/character/face_crycry.png"
            width="200"
            alt="친구사진"
          />
          <LoadingHeader>
            아직 가입한 친구가 없어요. 🥲
            <br />
            친구 초대하기 버튼으로 초대해보세요!
          </LoadingHeader>
        </LoadingContainer>
      ) : null}
      {isLoading ? (
        <LoadingContainer>
          <img src="/assets/image/character/spinner.gif" alt="spinner" />
          <LoadingHeader>친구들 모으는중</LoadingHeader>
        </LoadingContainer>
      ) : (
        friendsData?.map((friend, idx) => {
          return friend.nickname === "adFit" ? (
            <FriendCard key={friend.id + idx} justifyContent={"center"}>
              <KakaoAdFit id={friend.invitationLink} />
            </FriendCard>
          ) : (
            <FriendCard key={friend.id + idx}>
              <RenderFriendCardContents
                profileImgUrl={friend.profileImgUrl}
                name={friend.nickname}
                invitationLink={friend.invitationLink}
              />
            </FriendCard>
          );
        })
      )}
    </Container>
  );
};

export default FriendsList;

export const AlignedFlex = styled(Flex)`
  align-items: center;
`;

const GoFriendsCalendarBtn = styled(Button)`
  background-color: #d84d23;
  border-color: #d84d23;
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
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  @media (max-width: 600px) {
    width: 100%;
    height: 62px;
    font-size: 24px;
  }
`;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  /* Firefox */
  scrollbar-width: none;

  /* Internet Explorer, Edge */
  &::-ms-overflow-style {
    display: none;
  }

  /* Chrome, Safari */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LoadingContainer = styled.div`
  height: 40vh;
  text-align: center;
`;
const LoadingHeader = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  border-radius: 50px;
`;
