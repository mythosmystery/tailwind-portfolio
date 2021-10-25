import Navbar from '../components/Navbar';
import NavbarItem from '../components/NavbarItem';
import NavbarTitle from '../components/NavbarTitle';

import { FaHome, FaDev } from 'react-icons/fa';
export default function NavbarComponent() {
   return (
      <Navbar>
         <NavbarItem link="/">
            <FaDev size="22" />
         </NavbarItem>
         <NavbarTitle>Hunter Barton Portfolio</NavbarTitle>
         <NavbarItem link="/">
            <FaHome size="22" />
         </NavbarItem>
         <NavbarItem link="#projects">Projects</NavbarItem>
         <NavbarItem link="#about">About</NavbarItem>
         <NavbarItem link="#resume">Resume</NavbarItem>
      </Navbar>
   );
}
