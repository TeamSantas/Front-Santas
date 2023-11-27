import React from "react";
import styled from "styled-components";
import { sidebarBgmAtom } from "../../store/globalState";
import { useAtom } from "jotai";
import ToggleButton from "../common/toggle";
import { setBGM } from "../../api/hooks/useStting";

const BgmToggle = () => {
  const [bgmOn, setBgmOn] = useAtom(sidebarBgmAtom);

  const handleClickBgmToggle = async () => {
    try {
      await setBGM(!bgmOn);
    } catch (e) {
      console.log(e);
    }
    setBgmOn((prev) => !prev);
  };

  return (
    <Content onClick={handleClickBgmToggle}>
      배경음
      <ToggleButton on={bgmOn} toggle={handleClickBgmToggle} />
    </Content>
  );
};

export default BgmToggle;

const Content = styled.div`
  cursor: pointer;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
`;
