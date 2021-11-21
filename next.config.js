const isProd = process.env.NODE_ENV === 'production';
module.exports = {
   images: {
      loader: 'imgix',
      path: 'https://mythosmystery.github.io'
   },
   basePath: '/tailwind-portfolio',
   assetPrefix: '/tailwind-portfolio'
};
