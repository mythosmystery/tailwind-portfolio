import Head from 'next/head';
import Card, { CardBody, CardFooter, CardLight, CardTitle } from '../components/Card';
import devCrowd from '../images/devcrowd.png';
import me from '../images/me.jpg';
import ImageCard from '../components/ImageCard';
import ProfileImage from '../components/ProfileImage';
import NavbarComponent from '../components/NavbarComponent';
import SkillsCard from '../components/SkillsCard';
import List, { ListTitle } from '../components/List';
import { useState } from 'react';
import Button from '../components/Button';
export default function Home() {
   const [showCard, setShowCard] = useState(false);
   return (
      <>
         <Head>
            <title>Tailwind Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <body className="bg-gray-900 min-w-screen min-h-screen">
            <NavbarComponent />

            <div className="flex flex-row bg-gray-600 p-2 mb-6 mt-10 mx-12 rounded-lg drop-shadow-lg" id="about">
               <ProfileImage image={me} />
               <Card>
                  My name is Hunter Barton and I am a 23 year old software developer, photographer and musician. In 2020 I moved to Oklahoma City from
                  Tucson, AZ. I have been programming for about 5 years, but I have had an interest since a young age because of my Dad who is also a
                  programmer. I started with Java and have since learned Javascript, Typescript, and I am learning C# currently. My passion for
                  programming and computers has always drawn me to the industry. I have taken programming classes at Pima Community College in Tucson,
                  AZ. I completed the Georgia Tech full-stack coding bootcamp with straight A's. I was the lead programmer on our final project, which
                  was a social media app. Prior to attending the GA Tech bootcamp I managed Google ads and a Squarespace website for my employer. At
                  that job I also troubleshot and repaired electronic equipment, this gave me a strong background for logically debugging systems.
               </Card>
            </div>

            <SkillsCard />

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
                  <a href="https://github.com/mythosmystery/dev-crowd">Source Code</a>
                  <a href="https://dev-crowd.herokuapp.com/">Deployment</a>
               </CardFooter>
            </ImageCard>

            <div className="flex flex-col sm:flex-row">
               <Card>
                  This is a test card with test things in it for testing stuff. Test card test card, this is a very nice test card. I need more text
                  to test this
               </Card>
               <Card>
                  This is a test card with test things in it for testing stuff. Test card test card, this is a very nice test card. I need more text
                  to test this
               </Card>
               <Card>
                  This is a test card with test things in it for testing stuff. Test card test card, this is a very nice test card. I need more text
                  to test this
               </Card>
            </div>
         </body>
      </>
   );
}
