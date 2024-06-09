import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'

const Sidebar = () => {
  return (
    <aside className='hidden w-72  shadow-md px-4 py-4 flex-col lg:flex'>
      <Link href='/'>
        <Image src="/assets/images/logo-text.svg" alt='logo' width={180} height={28}/>
      </Link>
      <nav className='py-8'>
        <ul>
          {navLinks.map((item, i) => (
            <li>
              <div className='flex'>
                <Link href={item.route} className='flex flex-row'>
                  <Image src={item.icon} alt='navLogo' width={20} height={20}/>
                  <h1>{item.label}</h1>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
