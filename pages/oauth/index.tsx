import { setCookie } from "../../businesslogics/cookie";

const OAuthLogin = () => {
  return <></>;
};
export default OAuthLogin;

export const getServerSideProps = async (context) => {
  const { token } = context.query;
  const { cookies } = context.req;

  if (!cookies["token"] && token) {
    setCookie("token", token, context);
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  }
  return { props: {} };
};
