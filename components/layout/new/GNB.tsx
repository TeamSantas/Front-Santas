import { useRouter } from "next/router";
import styled from "styled-components";
import { useAtom } from "jotai";
import {
  gnbActivePathAtom,
  loginUserDataAtom,
  modalStateAtom,
} from "../../../store/globalState";

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
      <IconWrapper>
        <Img
          src={getImagePath("friends")}
          onClick={() => handleClickOption("friends")}
        />
        <Img
          width={"26px"}
          height={"27px"}
          src={getImagePath("town")}
          onClick={() => handleClickOption("town")}
        />
        <HomeIcon onClick={() => handleClickOption("home")}>
          <Img width={"26px"} height={"27px"} src={getImagePath("home")} />
        </HomeIcon>
        <Img
          src={getImagePath("message")}
          onClick={() => handleClickOption("message")}
        />
        <Img
          src={getImagePath("todays-heart")}
          onClick={() => handleClickOption("todays-heart")}
        />
      </IconWrapper>
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  background-color: #1a2838;
  z-index: 10;
`;

const IconWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 500px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px;
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
