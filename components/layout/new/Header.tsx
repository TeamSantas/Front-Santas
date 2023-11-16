import { useRouter } from "next/router";
import styled from "styled-components";

const Header = () => {
  const router = useRouter();
  const handleClickMenu = (option) => {
    switch (option) {
      case "link":
        return; // TODO: 링크 복사 or 카카오 공유
      case "hamburger":
        return router.push("/town");
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <Flex>
        <Profile src="/assets/image/layout/default-profile.png" />
        <Img
          src="/assets/image/layout/link.svg"
          onClick={() => handleClickMenu("link")}
        />
      </Flex>
      <Img
        src="/assets/image/layout/hamburger.svg"
        onClick={() => handleClickMenu("hamburger")}
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
`;

const Img = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Profile = styled(Img)`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
