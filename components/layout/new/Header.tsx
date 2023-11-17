import styled from "styled-components";

const Header = () => {
  const handleClickMenu = () => {
    console.log("click setting");
  };

  return (
    <Wrapper>
      <Profile src="/assets/image/layout/default-profile.png" />
      <Img src="/assets/image/layout/setting.svg" onClick={handleClickMenu} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Profile = styled(Img)`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
