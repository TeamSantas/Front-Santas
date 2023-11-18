import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-top: 1px solid #1c3249;
  color: #999;
`;
const P = styled.p`
  font-size: ${(props) => props.fontSize};
  font-family: "KCC-Ganpan", KCC-Ganpan, sans-serif;
`;
const Flex = styled.div`
  display: flex;
  gap: 5px;
`;
const Mail = styled(Link)`
  text-decoration: none;
  color: #999;
  font-size: 0.7rem;
  font-family: "KCC-Ganpan", KCC-Ganpan, sans-serif;
`;
const Team = styled.div`
  font-family: "KCC-Ganpan", KCC-Ganpan, sans-serif;
`;
const Footer = () => {
  return (
    <Wrapper>
      <Team>TeamSantaz</Team>
      <hr />
      <Flex>
        {/* <Link
          href={
            "https://team-santaz.notion.site/72766cecfe9a499f9a216e44d4fe2270?pvs=4"
          }
          target="_blank"
        >
          <Image
            src={"/assets/image/icons/sns/notion.svg"}
            width={20}
            height={20}
            alt="instagram-logo"
          />
        </Link> */}
        <Link
          href={"https://www.instagram.com/teamsantaz_official/"}
          target="_blank"
        >
          <Image
            src={"/assets/image/icons/sns/instagram.svg"}
            width={20}
            height={20}
            alt="instagram-logo"
          />
        </Link>
      </Flex>
      <Mail href={"mailto:teamsantaz1225@gmail.com"}>
        teamsantaz1225@gmail.com
      </Mail>
      <P fontSize={"0.7rem"}>Copyright ©TeamSantaz. All rights reserved.</P>
    </Wrapper>
  );
};
export default Footer;
