import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { postBoard } from "../../api/hooks/useTownData";
import { ResponseData } from "../../util/type";
import { useAtom } from "jotai";
import { loginUserDataAtom } from "../../store/globalState";
import { useRouter } from "next/router";

const ContentInput = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [input, setInput] = useState("");
  const [storeUserData] = useAtom(loginUserDataAtom);
  const isLoginUser = storeUserData.id > 0;
  const router = useRouter();
  const placeHolderOptions = {
    default: "댓글을 입력해 주세요.",
    login: "로그인 후 이용 가능합니다.",
    focus: "부적절한 댓글은 삭제될 수 있습니다.",
  };
  const [placeHolder, setPlaceHolder] = useState(placeHolderOptions.default);
  const handleCheckboxChange = () => setIsAnonymous((prev) => !prev);
  const handleInput = (e) => {
    const value = e.target.value;
    if (value.length <= 300) {
      setInput(value);
    }
  };

  const handleClickSend = async () => {
    if (!isLoginUser) {
      const confirmText = `로그인이 필요한 기능이에요.\n로그인하러 갈까요?`;
      if (confirm(confirmText)) {
        router.push("/login");
      }
      return;
    }

    if (input.length === 0) {
      alert("댓글을 입력해 주세요.");
      return;
    }

    try {
      const response: ResponseData<string> = await postBoard({
        contents: input,
        writerId: storeUserData?.id,
        writerName: storeUserData?.nickname,
        isAnonymous,
      });
      if (response.status === 200) {
        alert("게시글 작성이 완료되었습니다.");
        router.reload();
      } else {
        alert("게시글 작성에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch (e) {
      console.error("Error: ", e);
    }
    setInput("");
  };

  return (
    <Wrapper>
      <Name>
        {isAnonymous ? <>익명</> : <>{storeUserData?.nickname || "이름"}</>}
        <Flex gap="5px">
          <ContentLength>{input.length} / 300</ContentLength>
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
          placeholder={
            storeUserData?.nickname ? placeHolder : placeHolderOptions.login
          }
          onFocus={() => setPlaceHolder(placeHolderOptions.focus)}
          onBlur={() => setPlaceHolder(placeHolderOptions.default)}
          onChange={handleInput}
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

const ContentLength = styled.div`
  color: #5a758e;
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
