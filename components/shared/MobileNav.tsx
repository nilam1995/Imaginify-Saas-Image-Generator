import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants'

export const MobileNav = () => {
  return (
    <header className='flex justify-between shadow-md h-16 w-full px-4'>
      <Link href="/">
        <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} className='flex justify-center h-full '/>
      </Link>
      <nav className='flex gap-2'>
        <Sheet>
          <SheetTrigger> 
            <Image 
              src="/assets/icons/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
              />
            </SheetTrigger>
          <SheetContent>
          <SheetHeader>
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
          </SheetHeader>
        </SheetContent>
    </Sheet>
      </nav>

    </header>

   

  )
}
