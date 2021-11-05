import { FC } from 'react';
import List from './List';
const SkillsCard: FC = () => {
   return (
      <div className="bg-gray-800 text-green-400 mx-6 sm:w-2/4 lg:w-1/4 sm:mx-auto p-4 rounded-lg shadow-lg">
         <List.Title>Languages</List.Title>
         <List>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Java</li>
         </List>
         <List.Title>Technologies</List.Title>
         <List>
            <li>React</li>
            <li>Node</li>
            <li>Next.js</li>
            <li>PostgreSQL</li>
            <li>TypeORM</li>
            <li>URQL</li>
            <li>GraphQL</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySQL</li>
         </List>
      </div>
   );
};
export default SkillsCard;
