const isProd = process.env.NODE_ENV === 'production';
module.exports = {
   images: {
      loader: 'imgix',
      path: isProd ? 'https://hunterbarton.ga' : 'http:localhost:3000'
   }
};
