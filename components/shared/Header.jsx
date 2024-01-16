import Link from 'next/link'
import React from 'react';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from './NavItems';
import MobailNav from './MobailNav';
const Header = () => {
  return (
   <header className='w-full h-[10vh] shadow-xl bg-white flex items-center justify-between px-[2rem] md:px-[5rem]'>
      <Link href='/' className='logo'>
        FT
      </Link>

    <SignedIn>
      <nav className='md:flex md:justify-between md:items-center hidden w-full max-w-xs'>
        <NavItems />
      </nav>
    </SignedIn>


      <div className='flex w-32 justify-end gap-3'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
          <MobailNav />
        </SignedIn>
       <SignedOut>
          <button className='login-btn'>
            <Link href='/sign-in'>
              Login
            </Link>
          </button>
       </SignedOut>
      </div>
   </header>
  )
}

export default Header