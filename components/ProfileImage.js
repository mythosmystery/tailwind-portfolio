import Image from 'next/image';
export default function ProfileImage({ image }) {
   return (
      <div className=" flex m-6 h-1/4">
         <Image src={image} className="rounded-full drop-shadow-lg" />
      </div>
   );
}
