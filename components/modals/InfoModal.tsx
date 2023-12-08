import React from 'react';
import styled from "styled-components";

const InfoModal = ({isDisplay}) => {
  return (
    <>
      {isDisplay?
          <SpeechBubble>
            💌 사용법을 알아보세요!
          </SpeechBubble>
          : null
      }
    </>
  );
};

export default InfoModal;

const SpeechBubble = styled.div`
  position: absolute;
  right: 5px;
  z-index: 100;
  bottom: calc(env(safe-area-inset-bottom) + 140px);
  padding: 10px;
  color: white;
  background: #F15A24;
  border-radius: .4em;
  box-shadow: 0 2px 6px rgb(255, 175, 175);
  font-family: "NanumSquareNeoOTF-Eb", sans-serif;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 1.375em solid transparent;
    border-top-color: #F15A24;
    border-bottom: 0;
    border-right: 0;
    margin-left: -0.687em;
    margin-bottom: -1.375em;
  }
`;