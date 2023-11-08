import styled from "styled-components";
import { Flex } from "../../styles/styledComponentModule";
import { getCookie } from "../../businesslogics/cookie";

const SearchBtn = styled.img`
  margin: 2px;
  height: 25px;
  cursor: pointer;
`;
const Container = styled.div`
  width: 65%;
  margin: 0 auto;
`;
//kakao 공유
export const shareKakao = () => {
  const inviteLink = getCookie("invitationLink");
  if (typeof window !== "undefined") {
    window.Kakao.Link.sendCustom({
      templateId: 86453,
      templateArgs: {
        pagePathname: inviteLink,
      },
    });
  }
};

//instargram, ect 공유
const shareWebShare = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "두근두근 어드벤트 캘린더 🎁",
        text: "특별한 크리스마스 즐기기✨",
        url: process.env.NEXT_PUBLIC_FRONT_URL,
      })
      .then(() => console.log("공유 성공"))
      .catch((error) => console.log("공유 실패", error));
  } else alert("공유하기 기능이 지원되지 않는 환경입니다😥");
};

//트위터 공유
const shareTwitter = () => {
  var sendText = "두근두근어드벤트캘린더"; // 전달할 텍스트
  var sendUrl = process.env.NEXT_PUBLIC_FRONT_URL; // 전달할 URL
  if (typeof window !== "undefined") {
    window.open(
      "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
    );
  }
};

//페북공유
const shareFacebook = () => {
  var sendUrl = process.env.NEXT_PUBLIC_FRONT_URL; // 전달할 URL
  if (typeof window !== "undefined") {
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
  }
};

const ShareAPIButton = () => {
  return (
    <Container>
      <Flex>
        <SearchBtn src="/assets/image/share/kakao.png" onClick={shareKakao} />
        <SearchBtn
          src="/assets/image/share/instagram.png"
          onClick={shareWebShare}
        />
        <SearchBtn
          src="/assets/image/share/twitter.png"
          onClick={shareTwitter}
        />
        <SearchBtn
          src="/assets/image/share/facebook.png"
          onClick={shareFacebook}
        />
      </Flex>
    </Container>
  );
};
export default ShareAPIButton;
