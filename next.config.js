const isProd = process.env.NODE_ENV === 'production';
module.exports = {
   images: {
      loader: 'imgix',
      path: isProd ? 'https://mythosmystery.github.io/tailwind-portfolio' : 'http:localhost:3000',
   },
   assetPrefix: isProd ? '/tailwind-portfolio/' : '',
   basePath: isProd ? '/tailwind-portfolio' : '',
};
