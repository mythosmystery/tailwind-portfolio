//images
import devCrowd from '../images/devCrowd.png';
import me from '../images/me.jpg';
import bugTracker from '../images/bug-tracker.png';
import notes from '../images/notes.png';
import markdown from '../images/markdown.png';
import weather from '../images/weather.png';
//components
import Head from 'next/head';
import Card from '../components/Card';
import ImageCard from '../components/ImageCard';
import ProfileImage from '../components/ProfileImage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Header from '../components/Header';
import List from '../components/List';

import { FaHome } from 'react-icons/fa';
import { FC, useState } from 'react';
import { IconSkills } from '../components/IconSkills';
import { motion } from 'framer-motion';

const variants = {
   hidden: { x: 500 },
   enter: { x: 0 },
   exit: { x: -500 }
};

const Home: FC = () => {
   const [showCard, setShowCard] = useState(false);
   const [showCard2, setShowCard2] = useState(false);
   const [showCard3, setShowCard3] = useState(false);
   const [showCard4, setShowCard4] = useState(false);
   const [showCard5, setShowCard5] = useState(false);
   return (
      <motion.main
         variants={variants}
         initial='hidden'
         animate='enter'
         exit='exit'
         className='bg-gray-900 w-screen h-screen fixed top-0 font-mono overflow-y-scroll'
      >
         <Head>
            <title>Hunter Barton Portfolio</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Navbar title='Hunter Barton Portfolio'>
            <Navbar.Item href='#'>
               <FaHome size='22' />
            </Navbar.Item>
            <Navbar.Item href='#about'>About</Navbar.Item>
            <Navbar.Item href='#skills'>Skills</Navbar.Item>
            <Navbar.Item href='#projects'>Projects</Navbar.Item>
            <Navbar.Item href='/resume'>Resume</Navbar.Item>
         </Navbar>

         <Header id='about'>About Me</Header>

         <article className='flex flex-col sm:flex-row bg-gray-600 mx-6 p-2 my-6 md:my-8 md:mx-12 rounded-lg drop-shadow-lg font-sans'>
            <ProfileImage image={me} />
            <Card>
               <p>
                  My name is Hunter Barton and I am a 24 year old software developer, photographer and musician. I have
                  been programming for about 5 years, but I have had an interest since a young age because of my Dad who
                  is also a programmer. I started with Java and have since learned Javascript, Typescript, and Python.
                  My passion for programming and computers has always drawn me to the industry. I have taken programming
                  classes at Pima Community College in Tucson, AZ. I completed the Georgia Tech full-stack coding
                  bootcamp with straight A's. I was the lead programmer on our final project, which was a social media
                  app. Prior to attending the GA Tech bootcamp I managed Google ads and a Squarespace website for my
                  employer. At that job I also troubleshot and repaired electronic equipment, this gave me a strong
                  background for logically debugging systems. I have also earned a certification for Data Structures and
                  Algorithms in Javascript.
               </p>
            </Card>
         </article>

         <Header id='skills'>My Skills</Header>

         <IconSkills />

         <Header id='projects'>Projects</Header>

         <article className='lg:w-4/6 lg:mx-auto mx-6'>
            <ImageCard image={notes}>
               <Card.Title>TypeNotes</Card.Title>
               <Card.Body>
                  A full-stack Typescript application. Create, Read, Update, and Delete notes that are saved to each
                  user. Access all your notes from anywhere. Built using Typescript, React, Next.js, TailwindCSS,
                  GraphQL, TypeORM, TypeGraphql, Express, Apollo Server, URQL, and Redis. It stores each user session in
                  a Redis database, and stores all notes and user information in a PostgreSQL database using TypeORM for
                  modelling and interacting with the data. It uses TypeGraphql and URQL to pass Graphql data between
                  client and server. This data is responsively rendered and manipulated using React and Next.js.
               </Card.Body>
               <h1 className='dark:text-gray-600 ml-3 mb-1.5 mt-3'>Example User: admin@typenotes.net | password</h1>
               <Button onClick={() => setShowCard3(!showCard3)}>Show {showCard3 ? 'less' : 'more'}</Button>
               <Card.Light show={showCard3}>
                  <Card.Title>Technologies used</Card.Title>
                  <List>
                     <li>Typescript</li>
                     <li>React</li>
                     <li>Next.js</li>
                     <li>TailwindCSS</li>
                     <li>PostgreSQL</li>
                     <li>TypeORM</li>
                     <li>TypeGraphql</li>
                     <li>GraphQL</li>
                     <li>URQL</li>
                     <li>Apollo Server</li>
                  </List>
               </Card.Light>
               <Card.Footer>
                  <Card.FooterItem href='https://github.com/mythosmystery/notes-web-frontend'>
                     Client Source
                  </Card.FooterItem>
                  <Card.FooterItem href='https://github.com/mythosmystery/notes-backend'>Server Source</Card.FooterItem>
                  <Card.FooterItem href='https://typenotes.ga'>Deployment</Card.FooterItem>
               </Card.Footer>
            </ImageCard>
         </article>

         <section className='flex flex-col lg:flex-row'>
            <article className='mx-6 lg:ml-6 lg:mr-3 lg:w-1/2'>
               <ImageCard image={weather}>
                  <Card.Title>Next Gen Weather</Card.Title>
                  <Card.Body>
                     An animated and responsive weather dashboard. With plenty of information and a modern design with
                     light and dark themes. The site is animated for an improved user experience. Created with Next.js,
                     React, TailwindCSS, Framer Motion, and the Open Weather Map API.
                  </Card.Body>
                  <Button onClick={() => setShowCard5(!showCard5)}>Show {showCard5 ? 'less' : 'more'}</Button>
                  <Card.Light show={showCard5}>
                     <Card.Title>Technologies used</Card.Title>
                     <List>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Framer Motion</li>
                        <li>TailwindCSS</li>
                        <li>Open Weather API</li>
                     </List>
                  </Card.Light>
                  <Card.Footer>
                     <Card.FooterItem href='https://github.com/mythosmystery/next-gen-weather'>
                        Source Code
                     </Card.FooterItem>
                     <Card.FooterItem href='https://next-gen-weather.ga'>Deployment</Card.FooterItem>
                  </Card.Footer>
               </ImageCard>
            </article>
            <article className='mx-6 lg:ml-3 lg:mr-6 lg:w-1/2'>
               <ImageCard image={bugTracker}>
                  <Card.Title>Simple Bug Tracking Tool</Card.Title>
                  <Card.Body>
                     A full-stack, bug tracking app. Report and manage bugs easily with an intuitive user interface.
                     Search for a piece of software and see all reported bugs for it. Created with React, GraphQL,
                     MongoDB, and Node.
                  </Card.Body>
                  <h1 className='dark:text-gray-600 ml-3 mb-1.5 mt-3'>Example User: test@test.net | password</h1>

                  <Button onClick={() => setShowCard2(!showCard2)}>Show {showCard2 ? 'less' : 'more'}</Button>
                  <Card.Light show={showCard2}>
                     <Card.Title>Technologies used</Card.Title>
                     <List>
                        <li>React</li>
                        <li>Express</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                        <li>JWT</li>
                        <li>Bootstrap</li>
                     </List>
                  </Card.Light>
                  <Card.Footer>
                     <Card.FooterItem href='https://github.com/mythosmystery/bug-tracker'>Source Code</Card.FooterItem>
                     <Card.FooterItem href='https://hb-bug-tracker.herokuapp.com/'>Deployment</Card.FooterItem>
                  </Card.Footer>
               </ImageCard>
            </article>
         </section>

         <section className='flex flex-col lg:flex-row'>
            <article className='mx-6 lg:ml-6 lg:mr-3 lg:w-1/2'>
               <ImageCard image={markdown}>
                  <Card.Title>Markdown It!</Card.Title>
                  <Card.Body>
                     A responsive and beautiful markdown preview app. Write your markdown on the left and see it
                     rendered with full syntax highlighting on the right. Also supports saving markdown to local storage
                     for access across sessions Created with React, Next.js, Framer Motion, TailwindCSS, and Marked.
                  </Card.Body>
                  <Button onClick={() => setShowCard4(!showCard4)}>Show {showCard4 ? 'less' : 'more'}</Button>
                  <Card.Light show={showCard4}>
                     <Card.Title>Technologies used</Card.Title>
                     <List>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Framer Motion</li>
                        <li>TailwindCSS</li>
                        <li>Marked.js</li>
                     </List>
                  </Card.Light>
                  <Card.Footer>
                     <Card.FooterItem href='https://github.com/mythosmystery/markdown-it'>Source Code</Card.FooterItem>
                     <Card.FooterItem href='https://markdownit.ga'>Deployment</Card.FooterItem>
                  </Card.Footer>
               </ImageCard>
            </article>
            <article className='mx-6 lg:ml-3 lg:mr-6 lg:w-1/2'>
               <ImageCard image={devCrowd}>
                  <Card.Title>Dev Crowd</Card.Title>
                  <Card.Body>
                     A full-stack, mobile responsive social media site. Using React and Bootstrap for the frontend. On
                     the backend this site uses Express, MongoDB, and GraphQL. A responsive and user-friendly UI
                     experience is paired with a fully featured backend for future features.
                  </Card.Body>
                  <h1 className='dark:text-gray-600 ml-3 mb-1.5 mt-3'>Example User: test@test.net | password</h1>
                  <Button onClick={() => setShowCard(!showCard)}>Show {showCard ? 'less' : 'more'}</Button>
                  <Card.Light show={showCard}>
                     <Card.Title>Technologies used</Card.Title>
                     <List>
                        <li>React</li>
                        <li>Express</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                        <li>JWT</li>
                        <li>Bootstrap</li>
                     </List>
                  </Card.Light>
                  <Card.Footer>
                     <Card.FooterItem href='https://github.com/mythosmystery/dev-crowd'>Source Code</Card.FooterItem>
                     <Card.FooterItem href='https://hb-dev-crowd.herokuapp.com/'>Deployment</Card.FooterItem>
                  </Card.Footer>
               </ImageCard>
            </article>
         </section>

         <Footer>2021 Hunter Barton</Footer>
      </motion.main>
   );
};
export default Home;
