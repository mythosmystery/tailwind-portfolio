// import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

interface ImageCardProps {
   image: StaticImageData;
}

const ImageCard: FC<ImageCardProps> = ({ image, children }) => {
   return (
      <div className='bg-gray-800 my-4 p-3 rounded-md drop-shadow-lg'>
         <div>
            <Image src={image} />
         </div>
         <div className='text-gray-300 p-1'>{children}</div>
      </div>
   );
};
export default ImageCard;
