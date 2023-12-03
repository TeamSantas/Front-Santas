import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Flex } from "../../styles/styledComponentModule";
import { useAtom } from "jotai";
import { loginUserDataAtom, modalStateAtom } from "../../store/globalState";

const ShareTriggerButton = () => {
  const [storeUserData] = useAtom(loginUserDataAtom);
  const isLoginUser = storeUserData.id !== -1;
  const [, setShowModal] = useAtom(modalStateAtom);

  return (
    isLoginUser && (
      <ButtonFlex>
        <UpdateBtn
          onClick={() => {
            setShowModal({
              label: "share",
              show: true,
            });
          }}
        >
          친구 초대하기
        </UpdateBtn>
      </ButtonFlex>
    )
  );
};

export default ShareTriggerButton;

const ButtonFlex = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

const UpdateBtn = styled(Button)`
  background-color: #2c6b51;
  border-color: #2c6b51;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 13px;
  &:hover {
    background-color: #3c6c54;
    border-color: #3c6c54;
  }
`;
