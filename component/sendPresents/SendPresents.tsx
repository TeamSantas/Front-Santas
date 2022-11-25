import styled from "styled-components";
import TextArea from "./TextArea";

const SendPresentsWrapper = styled.div`
  text-align: center;
  color: white;
  background-image: url("/assets/image/message-background.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

const SendPresents = (props) => {
  const friendName = "수연";

  return (
    <SendPresentsWrapper>
      <h2>
        {friendName} 님에게 <br /> 쪽지를 보내보세요
      </h2>
      <TextArea />
    </SendPresentsWrapper>
  );
};

export default SendPresents;
