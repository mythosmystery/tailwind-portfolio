import Image from 'next/image';
import { FC } from 'react';

interface ImageCardProps {
   image: StaticImageData;
}

const ImageCard: FC<ImageCardProps> = ({ image, children }) => {
   return (
      <div className='relative bg-gray-800 my-4 p-3 rounded-md drop-shadow-lg'>
         <Image src={image} className='hover:scale-110' />
         <div className='text-gray-300 p-1'>{children}</div>
      </div>
   );
};
export default ImageCard;
