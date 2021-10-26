export default function Menu({ children, showMenu }) {
   return (
      <div className="top-0 left-0 mt-20 ml-3 fixed z-50">
         <div className={showMenu ? '' : 'hidden'}>
            {children.map((child, i) => {
               return <MenuItem key={i}>{child}</MenuItem>;
            })}
         </div>
      </div>
   );
}
export function MenuItem({ children }) {
   return (
      <div className="text-green-300 z-50 bg-gray-800 p-3 justify-center mb-2 rounded-md shadow-md hover:ring ring-green-200/50 active:bg-green-400 active:text-gray-800 flex">
         {children}
      </div>
   );
}
import { FaBars } from 'react-icons/fa';

export function MenuButton({ onClick }) {
   return (
      <>
         <div
            onClick={onClick}
            className="fixed sm:hidden m-2 p-4 top-0 left-0 transform text-gray-900 z-40 bg-green-400 active:bg-green-900 active:text-gray-400 active:rotate-90 transition-all duration-100 ease-out  rounded-full shadow-lg active:shadow-sm"
         >
            <FaBars size="24" />
         </div>
      </>
   );
}
