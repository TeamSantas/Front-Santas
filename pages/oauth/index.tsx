import { setCookie } from "../../businesslogics/cookie";

const OAuthLogin = () => {
  return <></>;
};

export async function getServerSideProps(context) {
  const { token } = context.query;
  setCookie("token", token, context);

  const redirectUrl = "/"; // 리다이렉트할 URL 설정
  const maskedUrl = removeQueryParams(redirectUrl); // 쿼리 파라미터를 제거한 URL

  context.res.setHeader("Location", maskedUrl);
  context.res.statusCode = 302;
  context.res.end();

  return {
    props: {},
  };
}
// 쿼리 파라미터 제거
const removeQueryParams = (url) => {
  const baseUrl = url.split("?")[0];
  return baseUrl;
};
export default OAuthLogin;
