import styled from "styled-components";
import Layout from "../components/layout/new/Layout";
import { Modals } from "../components/modals/modals";
import HeartTab from "../components/todays-heart/heart-tab";
import { getTodaysQuestion } from "../api/hooks/useHeart";

const TodaysHeart = ({ todaysQuestion = "", error = false }) => {
  return (
    <>
      <Modals />
      <Wrapper>
        <Logo src={"/asset_ver2/image/layout/todays-heart-logo.png"} />
        <Text>
          매일 달라지는 질문에 마음을 담아 하트를 보내요!
          <br />( 하트는 하루 최대 5명에게 보낼 수 있어요. )
        </Text>
        <Card>
          <Question>
            {error
              ? "같이 눈오리🐤 만들고 싶은 사람은?"
              : `Q. ` + todaysQuestion}
          </Question>
        </Card>
        <HeartTab />
      </Wrapper>
    </>
  );
};

TodaysHeart.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default TodaysHeart;

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];
  // 로그인한 유저가 아니라면 로그인으로 이동
  if (!token) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return {
      props: {},
    };
  }

  try {
    const todaysQuestion = await getTodaysQuestion();
    console.log("===>", todaysQuestion);
    return {
      props: {
        todaysQuestion,
      },
    };
  } catch (e) {
    return {
      props: {
        error: true,
      },
    };
  }
}

const Wrapper = styled.div`
  display: flex;
  height: calc(100dvh - 150px);
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 500px;
  font-size: 14px;
  color: white;
  text-align: center;
  margin: 0 auto;
`;

const Text = styled.div`
  font-size: 0.8rem;
  font-family: NanumSquare Neo OTF;
  font-weight: 800;
  margin-top: 20px;
`;

const Card = styled.div`
  padding: 11px 16px;
  margin-top: 20px;
  background: #e25320;
  border-radius: 20px;
  width: 400px;
  @media (max-width: 768px) {
    max-width: calc(100vw - 40px);
  }
`;

const Question = styled.div`
  font-size: 16px;
  font-family: "NanumSquare Neo OTF";
  font-weight: 800;
  word-wrap: break-word;
  white-space: pre-line;
`;

const Logo = styled.img`
  width: 80vw;
  max-width: 350px;
  min-width: 200px;
`;
