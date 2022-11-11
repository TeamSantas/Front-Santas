import Header from "./Header";
import styled from "styled-components";

const MainWrapper = styled.div`
  //// TODO : 반응형 작업
  //width: 360px;
  //height: 640px;
  background-color: #181c23;
  padding: 22px;
  height: 100vh;
  margin: 0 auto;
  box-shadow: 0 5px 20px 5px gray;
`;

const Layout = ({ children }) => {
    return (
        <MainWrapper>
            <Header />
            {children}
        </MainWrapper>
    );
}

export default Layout
