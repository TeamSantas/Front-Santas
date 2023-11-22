import { setCookie } from "../../businesslogics/cookie";

const OAuthLogin = () => {
  return <></>;
};

export async function getServerSideProps(context) {
  const { token } = context.query;
  setCookie("token", token, context);
  const redirectUrl = "/";

  // context 객체의 url 속성을 변경하여 리다이렉트
  context.res.setHeader("Location", redirectUrl);
  context.res.statusCode = 302;
  context.res.end();

  return {
    props: {},
  };
}

export default OAuthLogin;
