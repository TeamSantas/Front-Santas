import React from "react";
import styled from "styled-components";
import { sidebarNotificationAtom } from "../../store/globalState";
import { useAtom } from "jotai";
import ToggleButton from "../common/toggle";

const NotificationToggle = () => {
  const [notificationOn, setNotificationOn] = useAtom(sidebarNotificationAtom);

  const handleClickNotificationToggle = async () => {
    try {
      // TODO: 알림 수신 / 거부 처리
      setNotificationOn((prev) => !prev);
    } catch (e) {}
  };

  return (
    <Content onClick={handleClickNotificationToggle}>
      알림 수신 동의
      <ToggleButton
        on={notificationOn}
        toggle={handleClickNotificationToggle}
      />
    </Content>
  );
};

export default NotificationToggle;

const Content = styled.div`
  cursor: pointer;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
`;
