const isProd = process.env.NODE_ENV === 'production';
module.exports = {
   images: {
      loader: 'imgix',
      path: isProd ? 'https://mythosmystery.github.io' : 'http:localhost:3000'
   },
   basePath: '/tailwind-portfolio',
   assetPath: '/tailwind-portfolio'
};
