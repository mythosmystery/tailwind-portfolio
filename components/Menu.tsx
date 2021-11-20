import { FC, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { HTMLMotionProps, motion } from 'framer-motion';

interface MenuProps {
   showMenu: boolean;
   handleClose: () => void;
}

const Menu: FC<MenuProps> = ({ children, showMenu, handleClose }) => {
   const menuRef = useRef(null as any);
   useEffect(() => {
      menuRef?.current.focus();
   }, [showMenu]);
   return (
      <div
         className='top-0 left-0 mt-20 ml-3 fixed z-50 focus:outline-none'
         onBlur={() => setTimeout(() => handleClose(), 50)}
         tabIndex={-1}
         ref={menuRef}
      >
         <div className={showMenu ? '' : 'hidden'}>{children}</div>
      </div>
   );
};

const Button: FC<HTMLMotionProps<'div'>> = props => {
   return (
      <>
         <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3, rotate: 90, translateY: 5 }}
            className='fixed sm:hidden m-2 p-4 top-0 left-0 transform text-gray-900 z-40 bg-green-400 rounded-full shadow-md active:shadow-sm'
            {...props}
         >
            <FaBars size='24' />
         </motion.div>
      </>
   );
};
export default Object.assign(Menu, { Button });
