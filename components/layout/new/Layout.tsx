import styled from "styled-components";
import Snow from "../Snow";

const MainWrapper = styled.div`
  background-color: #1c3249;
  height: 100vh;
  margin: 0 auto;
  overflow: scroll;
  position: relative;
  background-size: cover;
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const UpperWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-top: env(safe-area-inset-top);
  margin-bottom: env(safe-area-inset-bottom);
`;
const Layout = ({ children }) => {
  return (
    <>
      <MainWrapper>
        <UpperWrapper>{children}</UpperWrapper>
        <Snow />
      </MainWrapper>
    </>
  );
};

export default Layout;
