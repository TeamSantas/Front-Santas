import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

const ContentInput = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => setIsChecked((prev) => !prev);
  return (
    <Wrapper>
      <Name>
        내 이름
        <Flex>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel>{"익명"}</CheckboxLabel>
        </Flex>
      </Name>
      <Flex>
        <Input placeholder="댓글을 입력해 주세요. 악플은 삭제될 수 있습니다. (500자)" />
        <SendWrapper>
          <Send
            alt="announce"
            src="/assets/image/town/send.png"
            width={30}
            height={30}
            onClick={() => {
              console.log("first");
            }}
          />
        </SendWrapper>
      </Flex>
    </Wrapper>
  );
};
export default ContentInput;

const Input = styled.textarea`
  padding: 10px 15px;
  width: 100%;
  height: 60px;
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
  width: 40vw;
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

const Flex = styled.label`
  display: flex;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
`;

const SendWrapper = styled.div`
  border-radius: 0 0 10px 0;
  background-color: #1e344f;
  padding: 10px 15px;
  height: 60px;
  display: flex;
  align-items: flex-end;
`;

const Send = styled(Image)`
  bottom: 30px;
  right: 35px;
  cursor: pointer;
`;
