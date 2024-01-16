'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import NavItems from './NavItems';

const MobailNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='flex md:hidden'>
        <Image src='/icons/menu-burger.svg' alt='burger' width={30} height={30} className='cursor-pointer' onClick={handleOpen} />

        {isOpen && (
        <div className="flex flex-col items-center gap-5 w-full backdrop-blur-sm border border-gray rounded-lg shadow-xl absolute z-10 text-center justify-center right-0 top-[4.5rem] p-5 menu-animation">
            <NavItems />
        </div>
      )}
    </div>
  )
}

export default MobailNav