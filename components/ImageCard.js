import Image from 'next/image';
export default function ImageCard({ image, children }) {
   return (
      <div className="relative bg-gray-800 my-4 p-3 rounded-md drop-shadow-lg">
         <Image src={image} />
         <div className="text-gray-300 p-1">{children}</div>
      </div>
   );
}
