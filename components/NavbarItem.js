export default function NavbarItem({ children, onClick }) {
   return (
      <div
         onClick={onClick}
         className="relative flex bg-gray-800 text-green-400 justify-center items-center my-2 mx-1 p-3 rounded-md shadow-md hover:rounded-xl hover:text-gray-300 hover:bg-gray-700 hover:scale-110 transition-all duration-100 ease-in cursor-pointer"
      >
         {children}
      </div>
   );
}
