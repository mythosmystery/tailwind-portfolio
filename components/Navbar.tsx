import { FaLinkedin, FaDev } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FC, ReactNode, useState } from 'react';
import Menu from './Menu';
import Link from 'next/link';

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
               <FaDev size="22" />
            </Item>
            <Title>{title}</Title>
            {children}
         </Panel>
         <Menu showMenu={showLinkMenu}>
            <Link href="https://github.com/mythosmystery">
               <FiGithub size="22" />
            </Link>
            <Link href="https://www.linkedin.com/in/hunter-barton-okc/">
               <FaLinkedin size="22" />
            </Link>
         </Menu>
         <Menu.Button onClick={() => setShowMenu(!showMenu)} />
         <Menu showMenu={showMenu}>{children}</Menu>
      </>
   );
};
const Panel: FC = ({ children }) => {
   return (
      <div className="flex-row hidden sm:flex sticky z-20 bg-gray-900 top-0 left-0 w-min-screen h-16 justify-end px-2 drop-shadow-lg">{children}</div>
   );
};

interface ItemProps {
   onClick?: () => void;
   href?: string;
}

const Item: FC<ItemProps> = ({ children, onClick, href }) => {
   return (
      <Link href={href || ''}>
         <div
            onClick={onClick}
            className="relative flex bg-gray-800 text-green-400 justify-center items-center my-2 mx-1 p-3 rounded-md shadow-md hover:rounded-xl hover:text-gray-300 hover:bg-gray-700 active:text-gray-300 active:bg-green-400 transition-all duration-100 ease-in cursor-pointer"
         >
            {children}
         </div>
      </Link>
   );
};
const Title: FC = ({ children }) => {
   return <div className="text-green-400 text-2xl invisible md:visible m-auto cursor-default">{children}</div>;
};
export default Object.assign(Navbar, { Item, Panel, Title });
