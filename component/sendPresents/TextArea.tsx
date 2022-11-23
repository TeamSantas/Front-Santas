import styled from "styled-components";
import { useRef } from "react";
import { GreenButton } from "../../styles/styledComponentModule";

const TextAreaWrapper = styled.div`
  padding-top: 4rem;
`;

const TextArea = () => {
  const ref = useRef(null);

  const handleClick = (event) => {
    // TODO : 쪽지 내용 DB 저장
    console.log(ref.current.value);
  };

  return (
    <TextAreaWrapper>
      <textarea className="textarea" ref={ref} id="message" name="message" />
      <GreenButton onClick={handleClick}>쪽지보내기</GreenButton>
    </TextAreaWrapper>
  );
};

export default TextArea;
