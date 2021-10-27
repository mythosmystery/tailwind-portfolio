//images
import devCrowd from '../images/devcrowd.png';
import me from '../images/me.jpg';
import techBlog from '../images/tech.PNG';
import bugTracker from '../images/bug-tracker.png';
//components
import Head from 'next/head';
import Link from 'next/link';
import Card, { CardBody, CardFooter, CardLight, CardTitle } from '../components/Card';
import ImageCard from '../components/ImageCard';
import ProfileImage from '../components/ProfileImage';
import Navbar from '../components/Navbar';
import SkillsCard from '../components/SkillsCard';
import List from '../components/List';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Header from '../components/Header';

import { FaHome } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
   const [showCard, setShowCard] = useState(false);
   const [showCard2, setShowCard2] = useState(false);
   const [showCard3, setShowCard3] = useState(false);
   return (
      <body className="bg-gray-900 min-w-screen min-h-screen font-mono">
         <Head>
            <title>Hunter Barton Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar title="Hunter Barton Portfolio">
            <Link href="#">
               <FaHome size="22" />
            </Link>
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="/resume">Resume</Link>
         </Navbar>

         <Header id="about">About Me</Header>

         <div className="flex flex-col sm:flex-row bg-gray-600 mx-6 p-2 my-6 md:my-8 md:mx-12 rounded-lg drop-shadow-lg font-sans">
            <ProfileImage image={me} />
            <Card>
               My name is Hunter Barton and I am a 23 year old software developer, photographer and musician. I have been programming for about 5
               years, but I have had an interest since a young age because of my Dad who is also a programmer. I started with Java and have since
               learned Javascript, Typescript, and I am learning C# currently. My passion for programming and computers has always drawn me to the
               industry. I have taken programming classes at Pima Community College in Tucson, AZ. I completed the Georgia Tech full-stack coding
               bootcamp with straight A's. I was the lead programmer on our final project, which was a social media app. Prior to attending the GA
               Tech bootcamp I managed Google ads and a Squarespace website for my employer. At that job I also troubleshot and repaired electronic
               equipment, this gave me a strong background for logically debugging systems.
            </Card>
         </div>

         <Header id="skills">Skills</Header>

         <SkillsCard />

         <Header id="projects">Projects</Header>

         <div className="lg:w-3/6 lg:mx-auto mx-6">
            <ImageCard image={devCrowd}>
               <CardTitle>Dev Crowd</CardTitle>
               <CardBody>
                  A full-stack, mobile responsive social media site. Using React and Bootstrap for the frontend. On the backend this site uses
                  Express, MongoDB, and GraphQL. A responsive and user-friendly UI experience is paired with a fully featured backend for future
                  features.
               </CardBody>
               <Button onClick={() => setShowCard(!showCard)}>Show {showCard ? 'less' : 'more'}</Button>
               <CardLight show={showCard}>
                  <CardTitle>Technologies used</CardTitle>
                  <List>
                     <li>React</li>
                     <li>Express</li>
                     <li>GraphQL</li>
                     <li>Apollo</li>
                     <li>JWT</li>
                     <li>Bootstrap</li>
                  </List>
               </CardLight>
               <CardFooter>
                  <Link href="https://github.com/mythosmystery/dev-crowd">Source Code</Link>
                  <Link href="https://dev-crowd.herokuapp.com/">Deployment</Link>
               </CardFooter>
            </ImageCard>
         </div>

         <div className="flex flex-col lg:flex-row">
            <div className="mx-6 lg:ml-6 lg:mr-3">
               <ImageCard image={bugTracker}>
                  <CardTitle>Simple Bug Tracking Tool</CardTitle>
                  <CardBody>
                     A full-stack, bug tracking app. Report and manage bugs easily with an intuitive user interface. Created with React, GraphQL,
                     MongoDB, and Node.
                  </CardBody>
                  <Button onClick={() => setShowCard2(!showCard2)}>Show {showCard2 ? 'less' : 'more'}</Button>
                  <CardLight show={showCard2}>
                     <CardTitle>Technologies used</CardTitle>
                     <List>
                        <li>React</li>
                        <li>Express</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                        <li>JWT</li>
                        <li>Bootstrap</li>
                     </List>
                  </CardLight>
                  <CardFooter>
                     <Link href="https://github.com/mythosmystery/bug-tracker">Source Code</Link>
                     <Link href="https://hb-bug-tracker.herokuapp.com/">Deployment</Link>
                  </CardFooter>
               </ImageCard>
            </div>
            <div className="mx-6 lg:ml-3 lg:mr-6">
               <ImageCard image={techBlog}>
                  <CardTitle>Tech Blog</CardTitle>
                  <CardBody>
                     A simple and responsive blogging site. This is a full-stack project created with Express, MySQL, Sequelize, and Handlebars.
                     Create posts and leave comments on other posts. UI created with MaterializeCSS
                  </CardBody>
                  <Button onClick={() => setShowCard3(!showCard3)}>Show {showCard3 ? 'less' : 'more'}</Button>
                  <CardLight show={showCard3}>
                     <CardTitle>Technologies used</CardTitle>
                     <List>
                        <li>Node</li>
                        <li>Express</li>
                        <li>REST</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>Handlebars</li>
                        <li>MaterialCSS</li>
                     </List>
                  </CardLight>
                  <CardFooter>
                     <Link href="https://github.com/mythosmystery/tech-blog">Source Code</Link>
                     <Link href="https://hb-tech-blog.herokuapp.com/">Deployment</Link>
                  </CardFooter>
               </ImageCard>
            </div>
         </div>
         <Footer>2021 Hunter Barton</Footer>
      </body>
   );
}
