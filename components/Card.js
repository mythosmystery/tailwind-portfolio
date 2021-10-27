export default function Card({ children }) {
   return <div className="flex text-gray-300 bg-gray-800 p-3 shadow-md mx-6 my-4 rounded-md">{children}</div>;
}
export function CardTitle({ children }) {
   return <h2 className="text-green-400 text-2xl my-2">{children}</h2>;
}
export function CardBody({ children }) {
   return <p className="mx-6 my-2 font-sans">{children}</p>;
}
export function CardLight({ children, show }) {
   return (
      <div className={`flex flex-col bg-gray-700 sm:w-2/4 mx-6 px-4 sm:px-9 pt-1 pb-4 my-4 sm:mx-auto rounded-md shadow-lg ${show ? '' : 'hidden'}`}>
         {children}
      </div>
   );
}
export function CardFooter({ children }) {
   return (
      <div className="flex flex-row mt-2">
         <div className="border-t border-r border-gray-700 w-2/4 text-center text-yellow-600 text-lg pt-6 pb-3 hover:text-indigo-900 hover:cursor-pointer">
            {children[0]}
         </div>
         <div className="border-t border-gray-700 w-2/4 text-center text-yellow-600 text-lg pb-3 pt-6 hover:text-indigo-900 hover:cursor-pointer">
            {children[1]}
         </div>
      </div>
   );
}
