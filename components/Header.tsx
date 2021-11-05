import { FC, HTMLAttributes } from 'react';

const Header: FC<HTMLAttributes<HTMLHeadingElement>> = props => {
   return (
      <h1 className="text-center text-gray-400 text-3xl my-10" {...props}>
         {props.children}
      </h1>
   );
};
export default Header;
