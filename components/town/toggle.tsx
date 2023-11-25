import React from "react";
import styled from "styled-components";

const ToggleButtonContainer = styled.div<{ on: boolean }>`
  width: 40px;
  height: 20px;
  border-radius: 15px;
  background: ${({ on }) => (on === "true" ? "#1a2838" : "#ccc")};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  transition: all 0.3s ease;
  transform: ${({ on }) =>
    on === "true" ? "translateX(22px)" : "translateX(2px)"};
`;

interface ToggleButtonProps {
  on: boolean;
  toggle: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ on, toggle }) => (
  <ToggleButtonContainer on={on.toString()} onClick={toggle}>
    <Circle on={on.toString()} />
  </ToggleButtonContainer>
);

export default ToggleButton;
