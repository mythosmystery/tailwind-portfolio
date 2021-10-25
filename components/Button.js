export default function Button({ children, onClick }) {
   return (
      <button
         onClick={onClick}
         className="text-green-400 bg-gray-700 shadow-md text-center m-2 p-2 rounded-md hover:bg-green-400 hover:text-gray-800"
      >
         {children}
      </button>
   );
}
