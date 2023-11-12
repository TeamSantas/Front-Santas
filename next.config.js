/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents:
      true |
      {
        displayName: true,
        ssr: true,
      },
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    loader: "custom",
    loaderFile: "./components/common/ImageLoader.ts"
  },
};
module.exports = nextConfig;

//React Three Fiber 의존성
const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

if (process.env.NODE_ENV === "production") {
  console.log = function no_console() {};
  console.warn = function no_console() {};
}
