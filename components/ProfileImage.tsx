import Image from 'next/image';
import { FC } from 'react';

interface Props {
   image: StaticImageData;
}
const ProfileImage: FC<Props> = ({ image }) => {
   return (
      <div className=' flex m-6 h-1/4'>
         <Image src={image} alt='photo of the author' className='rounded-full drop-shadow-lg' />
      </div>
   );
};
export default ProfileImage;
