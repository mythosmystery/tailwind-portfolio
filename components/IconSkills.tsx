import React from 'react';
import {
   SiAdobephotoshop,
   SiAmazonaws,
   SiApollographql,
   SiBootstrap,
   SiCss3,
   SiDocker,
   SiExpress,
   SiGit,
   SiGithub,
   SiGnubash,
   SiGraphql,
   SiHeroku,
   SiHtml5,
   SiJava,
   SiJavascript,
   SiNextdotjs,
   SiNodedotjs,
   SiPostgresql,
   SiReact,
   SiSvelte,
   SiTailwindcss,
   SiTypescript,
   SiVisualstudiocode
} from 'react-icons/si';
import { IconContainer } from './IconContainer';

interface IconSkillsProps {}

export const IconSkills: React.FC<IconSkillsProps> = ({}) => {
   return (
      <section className='text-center'>
         <h1 className='text-2xl font-thin text-gray-400 pb-2 mt-6'>Languages</h1>
         <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 grid-flow-row w-full text-gray-600 py-6 px-4 my-6'>
            <IconContainer title='Typescript'>
               <SiTypescript size='64' className='text-blue-400' />
            </IconContainer>
            <IconContainer title='Javascript'>
               <SiJavascript size='64' className='text-yellow-300' />
            </IconContainer>
            <IconContainer title='Java'>
               <SiJava size='64' className='text-red-400' />
            </IconContainer>
            <IconContainer title='BASH'>
               <SiGnubash size='64' className='text-green-400' />
            </IconContainer>
            <IconContainer title='HTML 5'>
               <SiHtml5 size='64' className='text-yellow-700' />
            </IconContainer>
            <IconContainer title='CSS 3'>
               <SiCss3 size='64' className='text-blue-800' />
            </IconContainer>
         </div>

         <h1 className='text-2xl font-thin text-gray-400 pb-2'>Technologies</h1>
         <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 grid-flow-row w-full place-items-center text-white py-8 px-4'>
            <IconContainer title='express'>
               <SiExpress size='64' />
            </IconContainer>
            <IconContainer title='React'>
               <SiReact size='64' className='text-blue-500' />
            </IconContainer>
            <IconContainer title='PostgreSQL'>
               <SiPostgresql size='64' className='text-blue-900' />
            </IconContainer>
            <IconContainer title='GraphQL'>
               <SiGraphql size='64' className='text-pink-500' />
            </IconContainer>
            <IconContainer title='Next.js'>
               <SiNextdotjs size='64' className='text-indigo-600' />
            </IconContainer>
            <IconContainer title='Docker'>
               <SiDocker size='64' className='text-blue-700' />
            </IconContainer>
         </div>
         <div className='grid grid-cols-2  gap-y-8 sm:grid-cols-5 grid-flow-row place-items-center text-white px-4 pb-10'>
            <IconContainer title='Svelte'>
               <SiSvelte size='64' className='text-yellow-700' />
            </IconContainer>
            <IconContainer title='Node.js'>
               <SiNodedotjs size='64' className='text-green-700' />
            </IconContainer>
            <IconContainer title='Apollo GraphQL'>
               <SiApollographql size='64' />
            </IconContainer>
            <IconContainer title='TailwindCSS'>
               <SiTailwindcss size='64' className='text-blue-400' />
            </IconContainer>
            <IconContainer title='Bootstrap'>
               <SiBootstrap size='64' className='text-purple-800' />
            </IconContainer>
         </div>

         <h1 className='text-2xl font-thin text-gray-400 pb-8'>Software</h1>
         <div className='grid grid-cols-2  gap-y-8 sm:grid-cols-3 lg:grid-cols-6 grid-flow-row place-items-center text-white px-4 pb-10'>
            <IconContainer title='Github'>
               <SiGithub size='64' />
            </IconContainer>
            <IconContainer title='Git'>
               <SiGit size='64' className='text-yellow-800' />
            </IconContainer>
            <IconContainer title='VS Code'>
               <SiVisualstudiocode size='64' className='text-blue-900' />
            </IconContainer>
            <IconContainer title='Photoshop'>
               <SiAdobephotoshop size='64' className='text-blue-600' />
            </IconContainer>
            <IconContainer title='Amazon AWS'>
               <SiAmazonaws size='64' className='text-yellow-300' />
            </IconContainer>
            <IconContainer title='Heroku'>
               <SiHeroku size='64' className='text-purple-700' />
            </IconContainer>
         </div>
      </section>
   );
};
