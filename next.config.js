/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "morgan-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    MONGODB_URI:
      process.env.NODE_ENV === "production"
        ? "mongodb://production_connection_string"
        : process.env.NODE_ENV === "qa"
        ? "mongodb://qa_connection_string"
        : "mongodb+srv://morganhjelm82:gXPwBd5DLeIIX4Vj@next-js-react-the-compl.d2wdba8.mongodb.net/",
    JWT_SECRET: "mysecret",
  },
};
module.exports = nextConfig;
