import { FC, ReactNode } from 'react';

interface CardProps {
   show: boolean;
}

const Card: FC = ({ children }) => {
   return <div className='flex text-gray-300 bg-gray-800 p-3 shadow-md mx-6 my-4 rounded-md'>{children}</div>;
};
const Title: FC = ({ children }) => {
   return <h2 className='text-green-400 text-2xl my-2'>{children}</h2>;
};
const Body: FC = ({ children }) => {
   return <p className='mx-6 my-2 font-sans'>{children}</p>;
};
const Light: FC<CardProps> = ({ children, show }) => {
   return (
      <div
         className={`flex flex-col bg-gray-700 sm:w-3/5 mx-6 px-4 sm:px-9 pt-1 pb-4 my-4 sm:mx-auto rounded-md shadow-lg ${
            show ? '' : 'hidden'
         }`}>
         {children}
      </div>
   );
};

interface FooterProps {
   children: Array<ReactNode>;
}

const Footer: FC<FooterProps> = ({ children }) => {
   return (
      <div className='flex flex-row mt-2'>
         {children.map((child, i) => {
            return (
               <div
                  key={i}
                  className={
                     'border-t border-gray-700 w-2/4 text-center text-yellow-600 text-lg pb-3 pt-6 hover:text-indigo-900 hover:bg-gray-900 hover:cursor-pointer '
                  }>
                  {child}
               </div>
            );
         })}
      </div>
   );
};
export default Object.assign(Card, { Title, Light, Footer, Body });
