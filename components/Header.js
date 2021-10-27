export default function Header({ children, id }) {
   return (
      <h1 className="text-center text-gray-400 text-3xl my-10" id={id}>
         {children}
      </h1>
   );
}
