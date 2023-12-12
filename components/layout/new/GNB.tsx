import { useRouter } from "next/router";
import styled from "styled-components";
import { useAtom } from "jotai";
import {
  gnbActivePathAtom,
  loginUserDataAtom,
  modalStateAtom,
} from "../../../store/globalState";
import { Flex } from "../../../styles/styledComponentModule";

const Gnb = () => {
  const router = useRouter();
  const [activePathOption, setActivePathOption] = useAtom(gnbActivePathAtom);
  const [, setShowModal] = useAtom(modalStateAtom);
  const [storeUserData] = useAtom(loginUserDataAtom);
  const isLoginUser = storeUserData.id > 0;

  const handleClickOption = (option) => {
    setActivePathOption(option);

    switch (option) {
      case "friends":
        setShowModal({
          label: "friends",
          show: true,
        });
        break;
      case "town":
        router.push("/town");
        break;
      case "message":
        {
          if (!isLoginUser) {
            const confirmText = `로그인이 필요한 기능이에요.\n로그인하러 갈까요?`;
            if (confirm(confirmText)) {
              router.push("/login");
            }
            return;
          }
          router.push("/message");
        }
        break;
      case "home":
        {
          if (!isLoginUser) {
            const confirmText = `아직 내 캘린더가 없어요.\n로그인하러 갈까요?`;
            if (confirm(confirmText)) {
              router.push("/login");
            }
            return;
          }
          router.push("/");
        }
        break;
      case "todays-heart":
        {
          if (!isLoginUser) {
            const confirmText = `로그인이 필요한 기능이에요.\n로그인하러 갈까요?`;
            if (confirm(confirmText)) {
              router.push("/login");
            }
            return;
          }
          router.push("/todays-heart");
        }
        break;
      default:
        break;
    }
  };

  const getImagePath = (option) => {
    const condition = activePathOption === option && isLoginUser;
    return `/asset_ver2/image/layout/gnb/${option}${
      condition ? "-click" : "-default"
    }.svg`;
  };

  return (
    <Wrapper>
      <IconContainer>
        <IconWrapper>
          <Img
            src={getImagePath("friends")}
            onClick={() => handleClickOption("friends")}
          />
          친구목록
        </IconWrapper>
        <IconWrapper>
          <Img
            src={getImagePath("town")}
            onClick={() => handleClickOption("town")}
          />
          게시판
        </IconWrapper>
        <IconWrapper>
          <HomeIcon onClick={() => handleClickOption("home")}>
            <Img width={"26px"} height={"27px"} src={getImagePath("home")} />
          </HomeIcon>
        </IconWrapper>
        <IconWrapper>
          <Img
            src={getImagePath("message")}
            onClick={() => handleClickOption("message")}
          />
          쪽지함
        </IconWrapper>
        <IconWrapper>
          <Img
            src={getImagePath("todays-heart")}
            onClick={() => handleClickOption("todays-heart")}
          />
          하트보내기
        </IconWrapper>
      </IconContainer>
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #1a2838;
  z-index: 10;
  padding: 10px 22px 15px;
`;

const IconContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background-color: #1a2838;
`;

const Img = styled.img`
  width: ${({ width }) => width ?? "40px"};
  height: ${({ height }) => height ?? "40px"};
  cursor: pointer;
`;

const HomeIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #f9f9f9;
`;

const IconWrapper = styled(Flex)`
  flex-direction: column;
  color: white;
  font-size: 10px;
  font-family: NanumSquare Neo OTF;
  font-weight: 400;
  word-wrap: break-word;
  align-items: center;
`;
