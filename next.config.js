/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    BASE_URL: "https://nextjs-blog-app-keuc-mpq9c28s5-locng0114.vercel.app/api",

  },
  rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: 'https://nextjs-blog-app-keuc-mpq9c28s5-locng0114.vercel.app/api/:path*',
      },
    ]
  }
}

module.exports = nextConfig
