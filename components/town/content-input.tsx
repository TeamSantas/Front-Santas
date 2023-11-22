import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { postBoard } from "../../api/hooks/useTownData";
import { useAuthContext } from "../../store/contexts/components/hooks";
import { checkMemberAndRedirect } from "../utils/clickWithCheckMember";

const ContentInput = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [input, setInput] = useState("");
  const { storeUserData } = useAuthContext();
  const handleCheckboxChange = () => setIsAnonymous((prev) => !prev);
  const handleClickSend = () => {
    if (checkMemberAndRedirect(storeUserData)) return;

    postBoard({
      contents: input,
      writerId: storeUserData?.id,
      writerName: storeUserData?.nickname,
      isAnonymous,
    });
    setInput("");
  };

  return (
    <Wrapper>
      <Name>
        {storeUserData?.nickname ?? "이름"}
        <Flex gap="5px">
          <CheckboxLabel>{"익명"}</CheckboxLabel>
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={handleCheckboxChange}
          />
        </Flex>
      </Name>
      <InputArea>
        <Input
          placeholder="댓글을 입력해 주세요. 부적절한 댓글은 삭제될 수 있습니다. (300자)"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <SendWrapper>
          <Send
            alt="send-icon"
            src="/asset_ver2/image/town/send.png"
            width={30}
            height={30}
            onClick={handleClickSend}
          />
        </SendWrapper>
      </InputArea>
    </Wrapper>
  );
};
export default ContentInput;

const Input = styled.textarea`
  padding: 10px 15px;
  width: 100%;
  border-radius: 0 0 0 10px;
  border: none;
  background-color: #1e344f;
  margin: 0 auto;
  color: white;

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

  ::placeholder {
    color: #5a758e;
  }

  :focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 140px;
  padding: 20px;
  font-size: 13px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Name = styled.div`
  padding: 10px 15px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  background-color: #1e344f;
  border-radius: 10px 10px 0 0;
  color: white;
  font-size: 13px;
  font-family: "NanumSquareNeoOTF-Bd";
`;

const Flex = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
`;

const InputArea = styled(Flex)`
  flex: 1;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
`;

const SendWrapper = styled.div`
  border-radius: 0 0 10px 0;
  background-color: #1e344f;
  padding: 10px 15px;
  display: flex;
  align-items: flex-end;
`;

const Send = styled(Image)`
  bottom: 30px;
  right: 35px;
  cursor: pointer;
`;
