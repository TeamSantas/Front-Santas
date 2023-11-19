/** @type {import('next').NextConfig} */
const production = process.env.NODE_ENV === "production";

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
    removeConsole: production,
  },
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
    loader: production && "custom",
    loaderFile: production && "./components/common/ImageLoader.ts",
  },
};

//React Three Fiber 의존성
const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM(nextConfig);

if (process.env.NODE_ENV === "production") {
  console.log = function no_console() {};
  console.warn = function no_console() {};
}
