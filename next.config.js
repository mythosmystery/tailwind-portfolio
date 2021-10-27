module.exports = {
   images: {
      loader: 'imgix',
      path: 'https://mythosmystery.github.io//',
   },
};
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
   assetPrefix: isProd ? '/tailwind-portfolio/' : '',
};
