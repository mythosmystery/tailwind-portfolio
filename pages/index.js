import Head from 'next/head';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import NavbarItem from '../components/NavbarItem';

import { FaHome } from 'react-icons/fa';
export default function Home() {
   return (
      <>
         <Head>
            <title>Tailwind Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar title="Hunter Barton Portfolio">
            <NavbarItem link="/">
               <FaHome size="22" />
            </NavbarItem>
            <NavbarItem link="#projects">Projects</NavbarItem>
            <NavbarItem link="#about">About</NavbarItem>
         </Navbar>
      </>
   );
}
