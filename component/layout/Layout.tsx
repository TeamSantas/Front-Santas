import Header from "./Header";
import styled from "styled-components";

const MainWrapper = styled.div`
    background-color: #181c23;
    padding: 22px;
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