module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  experimental: {
    images: {
      unoptimized: true,
      loader: 'imgix',
      path:"/"
    }
  },
};
