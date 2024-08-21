import React from 'react';
import Image from 'next/image';

const NavBar = () => (
  <nav className="flex justify-between p-4 items-center border-b text-white">
   <span>   <Image
              src="/a79.png"
              alt="a79 Logo"
              width={60}
              height={50}
              priority
            /></span>
   <span>Home / Chat Name</span>
   <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray">
  <Image width={150} height={150} src="/avatar.png" alt="Avatar" className="w-full h-full object-cover"/>
</div>
  </nav>
);

export default NavBar;