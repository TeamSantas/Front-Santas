import { setCookie } from "../../businesslogics/cookie";

const OAuthLogin = () => {
  return <></>;
};

export async function getServerSideProps(context) {
  const { token } = context.query;
  setCookie("token", token, context);

  return {
    props: { token },
    redirect: {
      destination: "/",
    },
  };
}

export default OAuthLogin;
