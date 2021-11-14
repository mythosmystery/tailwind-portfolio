import { motion } from 'framer-motion';
import React from 'react';

interface IconContainer {
   title: string;
}

export const IconContainer: React.FC<IconContainer> = ({ children, title }) => {
   return (
      <div className='flex flex-col group h-full w-full place-items-center'>
         <motion.div whileHover={{ scale: 1.2, rotate: 360 }} whileTap={{ scale: 0 }}>
            {children}
         </motion.div>
         <div className='relative group-hover:text-green-400 group-active:text-green-900 mt-2 text-white py-0.5 rounded-md'>
            {title}
         </div>
      </div>
   );
};
