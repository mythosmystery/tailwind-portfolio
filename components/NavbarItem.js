export default function NavbarItem({ children, link }) {
   return (
      <div
         onClick={() => window.location.assign(link)}
         className="relative flex bg-gray-800 text-green-400 justify-center items-center my-2 mx-1 p-3 rounded-md hover:rounded-xl hover:text-gray-300 hover:bg-gray-700 transition-all duration-100 ease-in cursor-pointer"
      >
         {children}
      </div>
   );
}
