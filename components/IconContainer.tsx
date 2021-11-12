import { motion } from 'framer-motion';
import React from 'react';

interface IconContainer {
   title: string;
}

export const IconContainer: React.FC<IconContainer> = ({ children, title }) => {
   return (
      <div className='flex flex-col group h-full w-full place-items-center'>
         <motion.div whileHover={{ scale: 1.2 }} whileTap={{ rotate: 180 }}>
            {children}
         </motion.div>
         <div className='relative invisible group-hover:visible group-active:visible mt-2 text-white py-0.5 rounded-md'>
            {title}
         </div>
      </div>
   );
};
