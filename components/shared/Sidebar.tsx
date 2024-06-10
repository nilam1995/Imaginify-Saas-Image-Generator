import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { UserAuth } from "../../context/AuthContext"

const Sidebar = () => {
  const {user, googleSignIn, logout} = UserAuth();

  const handleSignIn = async () => {
    try{
      await googleSignIn()
    }catch(error){
      console.log(error);
    }
  }

  const handleSignOut = async () => {
    try{
      await logout()
    }catch(error){
      console.log(error);
    }
  }

  return (
    <aside className='hidden w-72  shadow-md px-4 py-4 flex-col lg:flex'>
      <Link href='/'>
        <Image src="/assets/images/logo-text.svg" alt='logo' width={180} height={28}/>
      </Link>
      <nav className='py-8'>
        <ul>
          {navLinks.map((item, i) => (
            <li key={i+1}>
              <div className='flex'>
                <Link href={item.route} className='flex flex-row'>
                  <Image src={item.icon} alt='navLogo' width={20} height={20}/>
                  <h1>{item.label}</h1>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        {!user ? (
        <button className='bg-violet-600 rounded-md px-16 py-2 text-white font-bold uppercase' onClick={handleSignIn}>
          <h1>SignUp</h1>
        </button>
        ): (
          <button className='bg-violet-600 rounded-md px-16 py-2 text-white font-bold uppercase' onClick={handleSignOut}>
            <h1>LogOut</h1>
          </button>
          )}
      </nav>
    </aside>
  )
}

export default Sidebar
