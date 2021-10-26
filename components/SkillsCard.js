import List from './List';
import { ListTitle, ListItem } from './List';
export default function SkillsCard() {
   return (
      <div className="bg-gray-800 text-green-400 mx-6 sm:w-2/4 lg:w-1/4 sm:mx-auto p-4 rounded-lg shadow-lg" id="skills">
         <ListTitle>Languages</ListTitle>
         <List>
            <li>Javascript</li>
            <li>Java</li>
            <li>C#</li>
         </List>
         <ListTitle>Technologies</ListTitle>
         <List>
            <li>React</li>
            <li>Node</li>
            <li>GraphQL</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>REST</li>
         </List>
      </div>
   );
}
