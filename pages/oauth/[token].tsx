import { setCookie } from "../../businesslogics/cookie";

const OAuthLogin = () => {
  return <></>;
};

export async function getServerSideProps({ query }) {
  const { token } = query;
  setCookie("token", token);

  return {
    props: { token },
    redirect: {
      destination: "/",
    },
  };
}

export default OAuthLogin;
