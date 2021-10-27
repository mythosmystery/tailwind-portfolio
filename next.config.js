const isProd = process.env.NODE_ENV === 'production';
module.exports = {
   images: {
      loader: 'imgix',
      path: 'https://mythosmystery.github.io/tailwind-portfolio',
   },
   assetPrefix: isProd ? '/tailwind-portfolio/' : '',
   env: isProd ? '/tailwind-portfolio/' : '',
};
