import { FC } from 'react';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
   return (
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
         <Component {...pageProps} />
      </AnimatePresence>
   );
};

export default MyApp;
