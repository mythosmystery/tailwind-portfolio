export default function Navbar({ children }) {
   return (
      <div className="flex-row hidden sm:flex sticky z-20 bg-gray-900 top-0 left-0 w-min-screen h-16 justify-end px-2 drop-shadow-lg">{children}</div>
   );
}
