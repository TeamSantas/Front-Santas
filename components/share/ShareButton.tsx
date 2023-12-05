import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Flex } from "../../styles/styledComponentModule";
import { useAtom } from "jotai";
import { loginUserDataAtom, modalStateAtom } from "../../store/globalState";

const ShareTriggerButton = () => {
  const [storeUserData] = useAtom(loginUserDataAtom);
  const isLoginUser = storeUserData.id > 0;
  const [, setShowModal] = useAtom(modalStateAtom);

  return (
    isLoginUser && (
      <ButtonFlex>
        <ShareBtn
          onClick={() => {
            setShowModal({
              label: "share",
              show: true,
            });
          }}
        >
          친구 초대하기
        </ShareBtn>
      </ButtonFlex>
    )
  );
};

export default ShareTriggerButton;

const ButtonFlex = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

const ShareBtn = styled(Button)`
  background-color: #38805b;
  border-color: #38805b;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 13px;
  font-family: NanumSquare Neo OTF;
  font-weight: 800;

  &:hover {
    background-color: #285f42;
    border-color: #285f42;
  }
`;
