/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = nextConfig

//React Three Fiber 의존성
const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
