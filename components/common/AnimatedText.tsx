import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const AnimatedText = ({ messages }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Wrap>
      <NoticeLink href={messages[index].url} target="_blank">
        {messages[index].content}
      </NoticeLink>
    </Wrap>
  );
};

export default AnimatedText;

const slide = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  20%, 80% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const NoticeLink = styled(Link)`
  position: absolute;
  width: 100%;
  color: #f2f2f2;
  text-decoration: none;
  font-family: "NanumSquareNeoOTF-Bd";
  animation: ${slide} 5.75s linear infinite;
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
