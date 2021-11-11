import React from 'react';
import {
   SiApollographql,
   SiBootstrap,
   SiCsharp,
   SiCss3,
   SiExpress,
   SiFramer,
   SiGnubash,
   SiGraphql,
   SiHtml5,
   SiJava,
   SiJavascript,
   SiMysql,
   SiNextdotjs,
   SiNodedotjs,
   SiPostgresql,
   SiReact,
   SiTailwindcss,
   SiTypescript
} from 'react-icons/si';

interface IconSkillsProps {}

export const IconSkills: React.FC<IconSkillsProps> = ({}) => {
   return (
      <div className='text-center'>
         <h1 className='text-2xl font-thin text-gray-400 pb-2 mt-6'>Languages</h1>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row w-full place-items-center text-gray-600 py-8 px-4 mt-6 mb-10'>
            <SiTypescript size='64' className='text-blue-400' />
            <SiJavascript size='64' className='text-yellow-300' />
            <SiJava size='64' className='text-red-400' />
            <SiGnubash size='64' className='text-green-400' />
            <SiHtml5 size='64' className='text-yellow-700' />
            <SiCss3 size='64' className='text-blue-800' />
         </div>

         <h1 className='text-2xl font-thin text-gray-400 pb-2 mt-6'>Technologies</h1>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 grid-flow-row w-full place-items-center text-white py-8 my-6 px-4'>
            <SiExpress size='64' />
            <SiReact size='64' className='text-blue-500' />
            <SiPostgresql size='64' className='text-blue-900' />
            <SiGraphql size='64' className='text-pink-500' />
            <SiNextdotjs size='64' className='text-indigo-600' />
         </div>
         <div className='grid grid-cols-4 grid-flow-row place-items-center text-white px-10 pb-10'>
            <SiNodedotjs size='64' className='text-green-700' />
            <SiApollographql size='64' />
            <SiTailwindcss size='64' className='text-blue-400' />
            <SiBootstrap size='64' className='text-purple-800' />
         </div>
      </div>
   );
};
