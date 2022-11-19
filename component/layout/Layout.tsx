import Header from "./Header";
import styled from "styled-components";
// import Snows from "./Snows";

const MainWrapper = styled.div`
  background-color: #181c23;
  padding: 22px;
  height: 100vh;
  margin: 0 auto;
  overflow: scroll;
  box-shadow: 0 5px 20px 5px gray;
  position: relative;
`;

const Layout = ({ children }) => {
    return (
        <MainWrapper>
            {/*<Snows/>*/}
            <Header />
            {children}
        </MainWrapper>
    );
}

export default Layout
