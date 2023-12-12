import React from 'react';
import styled, {css} from "styled-components";

const InfoModal = ({isDisplay, text, direction}) => {
  return (
    <>
      {isDisplay?
          <SpeechBubble direction={direction}>{text}</SpeechBubble>
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
  padding: 10px;
  color: white;
  background: #F15A24;
  border-radius: .4em;
  box-shadow: 0 2px 6px rgb(255, 175, 175);
  font-family: "NanumSquareNeoOTF-Eb", sans-serif;

  ${({ direction }) => positionStyles[direction]}
  ${({ direction }) => arrowStyles[direction]}
`;

const positionStyles = {
  down: css`
    bottom: calc(env(safe-area-inset-bottom) + 140px);
  `,
  right: css`
    top: 30px;
    right: 100px;
  `
};

const arrowStyles = {
  down: css`
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
  `,
  right: css`
    &::after{
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-left-color: #F15A24;
      border-right: 0;
      border-top: 0;
      margin-top: -10px;
      margin-right: -20px;
    }
  `
};