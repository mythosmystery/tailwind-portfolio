export default function Navbar({ children, title }) {
   return (
      <nav>
         <div className="flex flex-row bg-gray-900 top-0 left-0 w-screen h-16 justify-end px-2">{children}</div>
      </nav>
   );
}
