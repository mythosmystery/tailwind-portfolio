import { FaHome } from 'react-icons/fa';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const variants = {
   hidden: { x: 500 },
   enter: { x: 0 },
   exit: { x: -500 }
};

const Resume: FC = () => {
   return (
      <motion.main
         variants={variants}
         initial='hidden'
         animate='enter'
         exit='exit'
         className='bg-gray-900 min-w-screen min-h-screen'
      >
         <Head>
            <title>Hunter Barton Resume</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Navbar title='Hunter Barton Resume'>
            <Navbar.Item href='/'>
               <FaHome size='22' />
            </Navbar.Item>
            <Navbar.Item href='/#about'>About</Navbar.Item>
            <Navbar.Item href='/#skills'>Skills</Navbar.Item>
            <Navbar.Item href='/#projects'>Projects</Navbar.Item>
            <Navbar.Item href='/resume'>Resume</Navbar.Item>
         </Navbar>

         <div className='bg-white my-16 mx-6 md:mx-24 xl:mx-64 pt-20 sm:pt-24 pb-20 px-6 sm:px-16 md:px-24 shadow-lg font-sans'>
            <h1 className='text-center text-3xl font-bold border-b border-gray-400/50 pb-1.5'>Hunter Barton</h1>
            <p className='mt-4 text-center'>
               Phone: (520) 780-9324 | Email:{' '}
               <a className='text-blue-800' href='mailto:hunterblakebarton@gmail.com'>
                  hunterblakebarton@gmail.com
               </a>{' '}
               | Oklahoma City, 73103
            </p>
            <p className='mt-1.5 text-center'>
               | Linkedin:{' '}
               <a className='text-blue-800' href='https://linkedin.com/in/hunter-barton-okc'>
                  linkedin.com/in/hunter-barton-okc/
               </a>{' '}
               |
            </p>
            <p className='mt-1.5 text-center border-b border-gray-400/50 pb-4'>
               | Github:{' '}
               <a className='text-blue-800' href='https://github.com/mythosmystery'>
                  github.com/mythosmystery
               </a>{' '}
               |
            </p>
            <h2 className='text-center font-bold mt-6'>Summary</h2>
            <p className='text-sm'>
               Full-stack web developer utilizing an electronics repair background to solve problems logically and
               precisely. Able to creatively and efficiently invent solutions. Detail-oriented and quick at learning new
               skills. Well versed in Javascript, Typescript, HTML, CSS, and Java. Earned a certificate in full-stack
               web development from Georgia Tech and a Data Structures and Algorithms certificate from FreeCodeCamp
            </p>
            <h3 className='text-center font-bold mt-6'>Technical Skills</h3>
            <p className='text-sm mt-0.5'>
               <span className='font-bold'>Languages:</span> Javascript, Typescript, HTML, CSS, Java, Bash, C#, and SQL
            </p>
            <p className='text-sm mt-0.5'>
               <span className='font-bold'>Applications:</span> Github, MongoDB, MySQL, PostgreSQL, VS Code, Arch Linux,
               Photoshop
            </p>
            <p className='text-sm mt-0.5 border-b border-gray-300 pb-6'>
               <span className='font-bold'>Tools:</span> React, React-Native, Next.js, Node, Express, GraphQL,
               TypeGraphQL, TypeORM, Sequelize, Mongoose, Apollo, URQL, Svelte, jQuery, Bootstrap, TailwindCSS
            </p>
            <h3 className='text-center font-bold mt-6 mb-1'>Projects</h3>
            <b className='text-sm'>
               Dev Crowd |{' '}
               <a className='text-blue-800' href='https://github.com/mythosmystery/dev-crowd'>
                  github.com/mythosmystery/dev-crowd
               </a>{' '}
               |{' '}
               <a className='text-blue-800' href='https://hb-dev-crowd.heroku.com'>
                  hb-dev-crowd.heroku.com
               </a>
            </b>
            <ul className='list-disc list-inside text-sm px-6 mb-2'>
               <li>Summary: Full-stack social media app for developers using React, GraphQL, and MongoDB.</li>
               <li>Features: User Authentication, Create, Read, Update and Delete</li>
               <li>Role: Lead Developer</li>
               <li>Tools: React, Node, GraphQL, Express, MongoDB, Mongoose, Bootstrap, JWT</li>
            </ul>
            <b className='text-sm'>
               TypeNotes |{' '}
               <a className='text-blue-800' href='https://github.com/mythosmystery/notes-web-frontend'>
                  github.com/mythosmystery/notes-web-frontend
               </a>{' '}
               |{' '}
               <a className='text-blue-800' href='https://github.com/mythosmystery/notes-backend'>
                  github.com/mythosmystery/notes-backend
               </a>{' '}
               |{' '}
               <a className='text-blue-800' href='https://typenotes.ga'>
                  typenotes.ga
               </a>
            </b>
            <ul className='list-disc list-inside text-sm px-6 mb-2'>
               <li>Summary: Full-stack note taking app built in Typescript. Works natively as a PWA</li>
               <li>Features: User Authentication, Custom UI, End-to-end typings</li>
               <li>Role: Sole Developer</li>
               <li>Tools: React, Next.js, GraphQL, PostgreSQL, TypeORM, TailwindCSS, Redis, URQL, AWS</li>
            </ul>
            <b className='text-sm mt-2'>
               Tailwind Portfolio |{' '}
               <a className='text-blue-800 mt-2' href='https://github.com/mythosmystery/tailwind-portfolio'>
                  github.com/mythosmystery/tailwind-portfolio
               </a>{' '}
               |
            </b>
            <ul className='list-disc list-inside text-sm pl-6 border-b border-gray-300 pb-6'>
               <li>Summary: A responsive and beautiful personal portfolio. Built using Next.js static generation</li>
               <li>Features: Custom interface design, responsive navigation bar, lively animations</li>
               <li>Role: Sole Developer</li>
               <li>Tools: React, Next.JS, Tailwind CSS, Framer Motion, AWS</li>
            </ul>
            <h2 className='text-center text-xl mt-6 mb-4 font-bold'>Experience</h2>
            <p className='font-bold'>
               September 2019 - June 2020<span className='mx-16'>Hifi Workshop</span>
               <span>Tucson, Arizona</span>
            </p>
            <p className='font-bold text-sm ml-6 my-1'>Electronics Repair Technician</p>
            <ul className='list-disc list-inside text-sm pl-6 mb-8'>
               <li>Created a webapp for managing repair orders, optimizing the repair process.</li>
               <li>Developed an online presence and boosted SEO for more customer visibility.</li>
               <li>Worked with customers to find the best solution for their needs.</li>
               <li>
                  Collaborated in designing the storefront and workshop for efficient repairs and a fantastic customer
                  experience
               </li>
            </ul>
            <p className='font-bold'>
               October 2015 - August 2019<span className='mx-16'>Stereo Hospital</span>
               <span>Tucson, Arizona</span>
            </p>
            <p className='font-bold text-sm ml-6 my-1'>Online Sales/Project Manager</p>
            <ul className='list-disc list-inside text-sm pl-6 mb-2 pb-6 border-b border-gray-300'>
               <li>
                  Supervised other employees to complete projects efficiently, aiding to better inventory management.
               </li>
               <li>Oversaw all online sales, ensuring a quick turnaround for inventory and increased profit.</li>
               <li>Diagnosed electronic equipment and found creative solutions to repair them.</li>
               <li>Created IT solutions to aid in an optimal repair workflow, saving time and money.</li>
            </ul>
            <h5 className='font-bold text-xl my-4 mx-12 text-center'>Education</h5>
            <ul className='list-disc list-inside text-sm pl-6'>
               <li>Certificate in full-stack web develoment from Georgia Tech: 2021</li>
               <li>
                  Completed two semesters of computer science and Java programming at Pima Community College - Tucson,
                  AZ
               </li>
            </ul>
         </div>

         <Footer>2021 Hunter Barton</Footer>
      </motion.main>
   );
};
export default Resume;
