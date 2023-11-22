import { setCookie } from "../../businesslogics/cookie";

const OAuthLogin = () => {
  return <></>;
};
export default OAuthLogin;

export async function getServerSideProps(context) {
  const { token } = context.query;
  setCookie("token", token, context);

  return {
    props: {},
  };
}
