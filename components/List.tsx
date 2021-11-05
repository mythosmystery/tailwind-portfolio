import { FC } from 'react';

const List: FC = ({ children }) => {
   return <ul className="list-disc list-inside px-12 text-lg">{children}</ul>;
};
const Title: FC = ({ children }) => {
   return <h2 className="text-2xl my-2 mx-4">{children}</h2>;
};
const Item: FC = ({ children }) => {
   return <li className="hover:text-gray-200 hover:border-b-2 border-gray-400/40 cursor-default">{children}</li>;
};
export default Object.assign(List, { Title, Item });
