/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
    images: {
      loader: 'akamai',
      path: '',
    },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //     loader: 'imgix',
  //     path:"/"
  //   }
  // }
}
