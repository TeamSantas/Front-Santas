/** @type {import('next').NextConfig} */
const env = process.env.APP_ENV || "local";

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
  ...(process.env.NODE_ENV === "production"
    ? {
        images: {
          loader: "custom",
          loaderFile: "./components/common/ImageLoader.ts",
        },
      }
    : {}),
};

//React Three Fiber 의존성
const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM(nextConfig);

if (process.env.NODE_ENV === "production") {
  console.log = function no_console() {};
  console.warn = function no_console() {};
}
