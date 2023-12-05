const Custom404 = () => {
  return;
};
export default Custom404;

export async function getServerSideProps(context) {
  context.res.writeHead(302, { Location: "/[invitation_code]" });
  context.res.end();
}
