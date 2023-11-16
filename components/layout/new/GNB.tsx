import { useRouter } from "next/router";
import styled from "styled-components";

const Gnb = () => {
  const router = useRouter();
  const handleClickMenu = (option) => {
    switch (option) {
      case "friends":
        return; // TODO: 친구 목록 창 띄우기
      case "snowball":
        return; // TODO: 내 캘린더로 이동
      case "townCalendarSwitch":
        return router.push("/town");
      case "mypage":
        return router.push("/mypage");
      case "speaker":
        return; // TODO: 소리 on/off
      default:
        return;
    }
  };
  return (
    <Wrapper>
      <Img
        src="/assets/image/layout/friends.svg"
        onClick={() => handleClickMenu("friends")}
      />
      <Img
        src="/assets/image/layout/snowball.svg"
        onClick={() => handleClickMenu("snowball")}
      />
      <Img
        src="/assets/image/layout/town.svg"
        onClick={() => handleClickMenu("townCalendarSwitch")}
      />
      <Img
        src="/assets/image/layout/messages.svg"
        onClick={() => handleClickMenu("mypage")}
      />
      <Img
        src="/assets/image/layout/speaker.svg"
        onClick={() => handleClickMenu("speaker")}
      />
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px;
  background-color: #1a2838;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
