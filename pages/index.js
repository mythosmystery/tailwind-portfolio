import Head from 'next/head';
import Card from '../components/Card';
import devCrowd from '../images/devcrowd.png';
import ImageCard from '../components/ImageCard';
import NavbarComponent from '../components/NavbarComponent';
export default function Home() {
   return (
      <>
         <Head>
            <title>Tailwind Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <body className="bg-gray-900 min-w-screen min-h-screen">
            <NavbarComponent />
            <Card>
               My name is Hunter Barton and I am a 23 year old software developer, photographer and musician. In 2020 I moved to Oklahoma City from
               Tucson, AZ. I have been programming for about 5 years, but I have had an interest since a young age because of my Dad who is also a
               programmer. I started with Java and have since learned Javascript, Typescript, and I am learning C# currently. My passion for
               programming and computers has always drawn me to the industry. I have taken programming classes at Pima Community College in Tucson,
               AZ. I completed the Georgia Tech full-stack coding bootcamp with straight A's. I was the lead programmer on our final project, which
               was a social media app. Prior to attending the GA Tech bootcamp I managed Google ads and a Squarespace website for my employer. At that
               job I also troubleshot and repaired electronic equipment, this gave me a strong background for logically debugging systems.
            </Card>
            <ImageCard image={devCrowd}>Test image test image test image test image test image</ImageCard>
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
