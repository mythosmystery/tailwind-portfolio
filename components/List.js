export default function List({ children }) {
   return <ul className="list-disc list-inside px-12 text-lg">{children}</ul>;
}
export function ListTitle({ children }) {
   return <h2 className="text-2xl my-2 mx-4">{children}</h2>;
}
export function ListItem({ children }) {
   return <li className="hover:text-indigo-800">{children}</li>;
}
