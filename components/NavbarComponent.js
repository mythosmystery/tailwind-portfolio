import Navbar from '../components/Navbar';
import NavbarItem from '../components/NavbarItem';
import NavbarTitle from '../components/NavbarTitle';

import { FaLinkedin, FaDev } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { useState } from 'react';
import Menu, { MenuButton } from './Menu';

export default function NavbarComponent({ children }) {
   const [showLinkMenu, setShowLinkMenu] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   return (
      <>
         <Navbar>
            <NavbarItem onClick={() => setShowLinkMenu(!showLinkMenu)}>
               <FaDev size="22" />
            </NavbarItem>
            <NavbarTitle>Hunter Barton Portfolio</NavbarTitle>
            {children.map(child => {
               return <NavbarItem>{child}</NavbarItem>;
            })}
         </Navbar>
         <Menu showMenu={showLinkMenu}>
            <a href="https://github.com/mythosmystery">
               <FiGithub size="22" />
            </a>
            <a href="https://github.com/mythosmystery">
               <FaLinkedin size="22" />
            </a>
         </Menu>
         <MenuButton onClick={() => setShowMenu(!showMenu)} />
         <Menu showMenu={showMenu}>{children}</Menu>
      </>
   );
}
