import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
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
        <Link
          href={
            "https://www.notion.so/pitapatdac/36927b1bd2b24a6888c0ee786b4eb865"
          }
          target="_blank"
        >
          <img
            src={"/assets/image/icons/sns/notion.svg"}
            width={20}
            height={20}
            alt="instagram-logo"
          />
        </Link>
        <Link
          href={"https://www.instagram.com/teamsantaz_official/"}
          target="_blank"
        >
          <img
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
      <P fontSize={"0.7rem"}>
        상호명 : 머지고래 | 사업자등록번호 : 775-06-01556
      </P>
    </Wrapper>
  );
};
export default Footer;
