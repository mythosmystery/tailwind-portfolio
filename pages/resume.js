import { FaHome } from 'react-icons/fa';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Resume() {
   return (
      <body className="bg-gray-900 min-w-screen min-h-screen">
         <Head>
            <title>Hunter Barton Resume</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar title="Hunter Barton Resume">
            <Link href="/">
               <FaHome size="22" />
            </Link>
            <Link href="/#about">About</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/resume">Resume</Link>
         </Navbar>

         <div className="bg-white my-16 h-[960px] mx-64 pt-24 pb-20 px-24">
            <h1 className="text-center text-3xl font-bold border-b border-gray-400/50 pb-1.5">Hunter Barton</h1>
            <p className="mt-4">
               Phone: (520) 780-9324 | Email:{' '}
               <a className="text-blue-800" href="mailto:hunterblakebarton@gmail.com">
                  hunterblakebarton@gmail.com
               </a>{' '}
               | Oklahoma City, 73103
            </p>
            <p className="mt-1.5 text-center">
               | Linkedin:
               <a className="text-blue-800" href="https://linkedin.com/in/hunter-barton-okc">
                  linkedin.com/in/hunter-barton-okc/
               </a>
               |
            </p>
            <p className="mt-1.5 text-center border-b border-gray-400/50 pb-4">
               | Github:{' '}
               <a className="text-blue-800" href="https://github.com/mythosmystery">
                  github.com/mythosmystery
               </a>{' '}
               |
            </p>
            <h2 className="text-center font-bold mt-6">Summary</h2>
            <p className="text-sm">
               Full-stack web developer utilizing an electronics repair background to solve problems logically and precisely. Able to creatively and
               efficiently invent solutions. Detail-oriented and quick at learning new skills. Well versed in Javascript, HTML, CSS, C#, and Java.
               Earned a certificate in full-stack web development from Georgia Tech.
            </p>
            <h3 className="text-center font-bold mt-6">Technical Skills</h3>
            <p className="text-sm mt-0.5">
               <span className="font-bold">Languages:</span> Javascript, Typescript, HTML, CSS, Java, Bash, C#, and SQL
            </p>
            <p className="text-sm mt-0.5">
               <span className="font-bold">Applications:</span> Github, MongoDB, MySQL, VS Code, Arch Linux, Photoshop
            </p>
            <p className="text-sm mt-0.5">
               <span className="font-bold">Tools:</span> React, Express, GraphQL, Node, NextJS, Bootstrap, jQuery, ASP.net, Tailwind
            </p>
         </div>
      </body>
   );
}
