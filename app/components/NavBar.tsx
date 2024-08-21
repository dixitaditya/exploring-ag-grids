import React from 'react';
import Image from 'next/image';

const NavBar = () => (
  <nav className="flex justify-between p-4 items-center border-b text-white">
   <span>79</span>
   <span>Home / Chat Name</span>
   <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
  <Image width={80} height={80} src="https://via.placeholder.com/80" alt="Avatar" className="w-full h-full object-cover"/>
</div>
  </nav>
);

export default NavBar;