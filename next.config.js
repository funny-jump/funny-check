/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXTAUTH_SECRET: "asdsadasd",
    mongodb_username: "funny-check_01",
    mongodb_password: "iIZICHxyYI0LiCMp",
    mongodb_clustername: "cluster0",
  }
};

module.exports = nextConfig;
