import styled from "styled-components";

const Header = () => {
  const handleClickMenu = () => {
    console.log("click setting");
  };

  return (
    <Wrapper>
      <Profile src="/asset_ver2/image/common/default-profile.png" />
      <Img
        src="/asset_ver2/image/layout/header/setting.svg"
        onClick={handleClickMenu}
      />
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
  z-index: 10;
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
`;

const Profile = styled(Img)`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
