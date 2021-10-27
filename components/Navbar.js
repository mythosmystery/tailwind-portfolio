import { FaLinkedin, FaDev } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { useState } from 'react';
import Menu, { MenuButton } from './Menu';

export default function Navbar({ children, title }) {
   const [showLinkMenu, setShowLinkMenu] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   return (
      <>
         <NavbarPanel>
            <NavbarItem onClick={() => setShowLinkMenu(!showLinkMenu)}>
               <FaDev size="22" />
            </NavbarItem>
            <NavbarTitle>{title}</NavbarTitle>
            {children.map((child, i) => {
               return <NavbarItem key={i}>{child}</NavbarItem>;
            })}
         </NavbarPanel>
         <Menu showMenu={showLinkMenu}>
            <a href="https://github.com/mythosmystery">
               <FiGithub size="22" />
            </a>
            <a href="https://www.linkedin.com/in/hunter-barton-okc/">
               <FaLinkedin size="22" />
            </a>
         </Menu>
         <MenuButton onClick={() => setShowMenu(!showMenu)} />
         <Menu showMenu={showMenu}>{children}</Menu>
      </>
   );
}
export function NavbarPanel({ children }) {
   return (
      <div className="flex-row hidden sm:flex sticky z-20 bg-gray-900 top-0 left-0 w-min-screen h-16 justify-end px-2 drop-shadow-lg">{children}</div>
   );
}
export function NavbarItem({ children, onClick }) {
   return (
      <div
         onClick={onClick}
         className="relative flex bg-gray-800 text-green-400 justify-center items-center my-2 mx-1 p-3 rounded-md shadow-md hover:rounded-xl hover:text-gray-300 hover:bg-gray-700 active:text-gray-300 active:bg-green-400 transition-all duration-100 ease-in cursor-pointer"
      >
         {children}
      </div>
   );
}
export function NavbarTitle({ children }) {
   return <div className="text-green-400 text-xl invisible md:visible m-auto cursor-default">{children}</div>;
}
