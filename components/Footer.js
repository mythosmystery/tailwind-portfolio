import { useState } from 'react';
import { FaAddressCard, FaLinkedin } from 'react-icons/fa';
import { FiGithub, FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';

export default function Footer({ children }) {
   const [showPhone, setShowPhone] = useState(false);
   const [showAddress, setShowAddress] = useState(false);
   const copy = input => {
      navigator.clipboard.writeText(input);
   };
   return (
      <>
         <div
            className={showPhone ? '' : 'hidden'}
            onClick={() => {
               setShowPhone(false);
               copy('520-780-9324');
            }}
         >
            <div className="bg-gray-800 text-center p-2 mb-4 rounded-xl w-2/4 shadow-md mx-auto text-gray-300 text-lg hover:ring ring-green-400/40 transition-all duration-150 ease-linear active:bg-green-400 active:text-gray-900">
               (520) 780-9324
            </div>
         </div>

         <div
            className={showAddress ? '' : 'hidden'}
            onClick={() => {
               setShowAddress(false);
               copy('3016 N Robinson Ave, Oklahoma City, OK, 73103');
            }}
         >
            <div className="bg-gray-800 text-center p-2 mb-4 rounded-xl w-2/4 shadow-md mx-auto text-gray-300 hover:ring ring-green-400/40 transition-all duration-150 ease-linear active:bg-green-400 active:text-gray-900">
               <h1>3016 N. Robinson Ave</h1>
               <p>Oklahoma City, OK</p>
               <p>73103</p>
            </div>
         </div>

         <div className="flex flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16 lg:gap-28 w-full bg-gray-800 text-green-400 text-5xl py-5">
            <FooterItem href="https://github.com/mythosmystery">
               <FiGithub />
            </FooterItem>
            <FooterItem href="https://linkedin.com/in/hunter-barton-okc">
               <FaLinkedin />
            </FooterItem>
            <FooterItem href="mailto:hunterblakebarton@gmail.com">
               <MdOutlineMail size="56" />
            </FooterItem>
            <FooterItem onClick={() => setShowPhone(!showPhone)}>
               <FiPhoneCall id="phone" />
            </FooterItem>
            <FooterItem onClick={() => setShowAddress(!showAddress)}>
               <FaAddressCard id="address" />
            </FooterItem>
         </div>
      </>
   );
}
export function FooterItem({ children, href, onClick }) {
   return (
      <a href={href} onClick={onClick} className="hover:text-gray-200 hover:scale-125 active:scale-150 transition-all duration-200 ease-linear">
         {children}
      </a>
   );
}
