import styled from "styled-components";
import PromotionLayout from "../component/layout/promotion-layout";

const Div = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Calendar = styled.img`
  display: block;
  max-width: 300px;
  margin: 0 auto;
  @media (max-width: 400px) {
    width: 100%;
    max-width: unset;
  }
`;
const Section = styled.div`
  max-width: 300px;
  margin: 0 auto;
  height: 400px;
  background-color: ${(props) => props.background};

  @media (max-width: 400px) {
    width: 100%;
    max-width: unset;
  }
`;

const Promotion = () => {
  return (
    <Div>
      <Calendar src="/assets/image/promotion/calendar.svg" />
      <Section background={"white"}>~ 쪽지 주고받는 기능 설명 ~</Section>
      <Section background={"#21499D"}>~ 카카오 친구 목록으로 쉽게 ~</Section>
      <Section background={"#5B93BC"}>~ 신규 기능 자랑 ~</Section>
      <Section background={"white"}>~ 팀산타즈 소개 및 footer 달기 ~</Section>
    </Div>
  );
};

Promotion.getLayout = (page) => {
  return <PromotionLayout>{page}</PromotionLayout>;
};

export default Promotion;
