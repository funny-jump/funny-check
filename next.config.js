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
    api_key:
      "qlN67RRwqI7rPd2MqkuUzSZ%2B2VcEU%2BX9tZ8YZTWeRNNOBalhvN%2FboClpZWlpTL52%2F0Nc8j6Zh6Y7Z1h%2FnceI3w%3D%3D",
  },
};

module.exports = nextConfig;
