import { FaLinkedin, FaDev } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FC, ReactNode, useState } from 'react';
import Menu from './Menu';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavbarProps {
   title: string;
   children: Array<ReactNode>;
}

const Navbar: FC<NavbarProps> = ({ children, title }) => {
   const [showLinkMenu, setShowLinkMenu] = useState(false);
   const [showMenu, setShowMenu] = useState(false);

   return (
      <>
         <Panel>
            <Item onClick={() => setShowLinkMenu(!showLinkMenu)}>
               <FaDev size='22' />
            </Item>
            <Title>{title}</Title>
            {children}
         </Panel>
         <Menu showMenu={showLinkMenu} handleClose={() => setShowLinkMenu(false)}>
            <Item href='https://github.com/mythosmystery'>
               <FiGithub size='28' />
            </Item>
            <Item href='https://www.linkedin.com/in/hunter-barton-okc/'>
               <FaLinkedin size='28' />
            </Item>
         </Menu>
         <Menu.Button onClick={() => setShowMenu(!showMenu)} />
         <Menu showMenu={showMenu} handleClose={() => setShowMenu(false)}>
            {children}
         </Menu>
      </>
   );
};
const Panel: FC = ({ children }) => {
   return (
      <nav className='flex-row hidden sm:flex sticky z-20 bg-gray-900 top-0 left-0 w-min-screen h-16 justify-end px-2 drop-shadow-lg'>
         {children}
      </nav>
   );
};

interface ItemProps {
   onClick?: () => void;
   href?: string;
}

const Item: FC<ItemProps> = ({ children, onClick, href }) => {
   return (
      <Link href={href || ''}>
         <motion.div
            whileTap={{ scale: 1.15, translateY: 5 }}
            whileHover={{ scale: 1.1 }}
            animate={{ rotate: 0, scale: 1 }}
            onClick={onClick}
            className='relative flex bg-gray-800 text-green-400 justify-center items-center my-2 mx-1 p-3 rounded-md shadow-md cursor-pointer hover:text-gray-600 hover:bg-green-500 active:bg-blue-400'
         >
            {children}
         </motion.div>
      </Link>
   );
};
const Title: FC = ({ children }) => {
   return <div className='text-green-400 text-2xl invisible md:visible m-auto cursor-default'>{children}</div>;
};
export default Object.assign(Navbar, { Item, Panel, Title });
