//images
import devCrowd from '../images/devcrowd.png';
import me from '../images/me.jpg';
import bugTracker from '../images/bug-tracker.png';
import notes from '../images/notes.png';
import markdown from '../images/markdown.png';
import weather from '../images/weather-light.png';
//components
import Head from 'next/head';
import Link from 'next/link';
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

const Home: FC = () => {
   const [showCard, setShowCard] = useState(false);
   const [showCard2, setShowCard2] = useState(false);
   const [showCard3, setShowCard3] = useState(false);
   const [showCard4, setShowCard4] = useState(false);
   const [showCard5, setShowCard5] = useState(false);
   return (
      <body className='bg-gray-900 min-w-screen min-h-screen font-mono'>
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

         <div className='flex flex-col sm:flex-row bg-gray-600 mx-6 p-2 my-6 md:my-8 md:mx-12 rounded-lg drop-shadow-lg font-sans'>
            <ProfileImage image={me} />
            <Card>
               My name is Hunter Barton and I am a 23 year old software developer, photographer and musician. I have
               been programming for about 5 years, but I have had an interest since a young age because of my Dad who is
               also a programmer. I started with Java and have since learned Javascript, Typescript, and I am learning
               C# currently. My passion for programming and computers has always drawn me to the industry. I have taken
               programming classes at Pima Community College in Tucson, AZ. I completed the Georgia Tech full-stack
               coding bootcamp with straight A's. I was the lead programmer on our final project, which was a social
               media app. Prior to attending the GA Tech bootcamp I managed Google ads and a Squarespace website for my
               employer. At that job I also troubleshot and repaired electronic equipment, this gave me a strong
               background for logically debugging systems.
            </Card>
         </div>

         <Header id='skills'>My Skills</Header>

         <IconSkills />

         <Header id='projects'>Projects</Header>

         <div className='lg:w-4/6 lg:mx-auto mx-6'>
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
                  <Link href='https://github.com/mythosmystery/notes-web-frontend'>Client Source</Link>
                  <Link href='https://github.com/mythosmystery/notes-backend'>Server Source</Link>
                  <Link href='https://mythosmystery.github.io/notes-web-frontend'>Deployment</Link>
               </Card.Footer>
            </ImageCard>
         </div>

         <div className='flex flex-col lg:flex-row'>
            <div className='mx-6 lg:ml-6 lg:mr-3 lg:w-1/2'>
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
                     <Link href='https://github.com/mythosmystery/next-gen-weather'>Source Code</Link>
                     <Link href='https://mythosmystery.github.io/next-gen-weather'>Deployment</Link>
                  </Card.Footer>
               </ImageCard>
            </div>
            <div className='mx-6 lg:ml-3 lg:mr-6 lg:w-1/2'>
               <ImageCard image={markdown}>
                  <Card.Title>Markdown It!</Card.Title>
                  <Card.Body>
                     A responsive and beautiful markdown preview app. Write your markdown on the left and see it
                     rendered with full syntax highlighting on the right. Created with React, Next.js, Framer Motion,
                     TailwindCSS, and Marked.
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
                     <Link href='https://github.com/mythosmystery/markdown-it'>Source Code</Link>
                     <Link href='https://mythosmystery.github.io/markdown-it'>Deployment</Link>
                  </Card.Footer>
               </ImageCard>
            </div>
         </div>

         <div className='flex flex-col lg:flex-row'>
            <div className='mx-6 lg:ml-6 lg:mr-3 lg:w-1/2'>
               <ImageCard image={bugTracker}>
                  <Card.Title>Simple Bug Tracking Tool</Card.Title>
                  <Card.Body>
                     A full-stack, bug tracking app. Report and manage bugs easily with an intuitive user interface.
                     Created with React, GraphQL, MongoDB, and Node.
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
                     <Link href='https://github.com/mythosmystery/bug-tracker'>Source Code</Link>
                     <Link href='https://hb-bug-tracker.herokuapp.com/'>Deployment</Link>
                  </Card.Footer>
               </ImageCard>
            </div>
            <div className='mx-6 lg:ml-3 lg:mr-6 lg:w-1/2'>
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
                     <Link href='https://github.com/mythosmystery/dev-crowd'>Source Code</Link>
                     <Link href='https://dev-crowd.herokuapp.com/'>Deployment</Link>
                  </Card.Footer>
               </ImageCard>
            </div>
         </div>

         <Footer>2021 Hunter Barton</Footer>
      </body>
   );
};
export default Home;
