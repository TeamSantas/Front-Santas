import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Flex } from "../../styles/styledComponentModule";

function Banner() {
  const router = useRouter();

  return (
    <>
      {router.asPath === "/ending" || router.asPath === "/ending" ? null : (
        <ButtonFlex>
          <EndingButton onClick={() => router.push("/ending")}>
            {"🎄메리 크리스마스🎄\n2023 두어캘 마무리 보러가기👆"}
          </EndingButton>
        </ButtonFlex>
      )}
    </>
  );
}

const ButtonFlex = styled(Flex)`
  width: 100%;
  justify-content: center;
  background-color: #38805b;
`;

const EndingButton = styled(Button)`
  width: 100%;
  background-color: #38805b;
  border-color: #38805b;
  border-radius: 0;
  padding: 10px 20px;
  font-size: 13px;
  font-family: NanumSquare Neo OTF;
  font-weight: 800;
  white-space: pre-line;

  &:hover {
    background-color: #285f42;
    border-color: #285f42;
  }

  @media (max-width: 300px) {
    font-size: 12px;
  }
`;

export default Banner;
