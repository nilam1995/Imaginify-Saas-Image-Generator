"use client";
import { MobileNav } from '@/components/shared/MobileNav';
import Sidebar from '@/components/shared/Sidebar';
import React from 'react'
import { AuthContextProvider } from "../../context/AuthContext";


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <AuthContextProvider>
    <main className='root'>
          <Sidebar/>
          <MobileNav/>
          <div className='root-container'>
            <div className='wrapper'>
              {children}
            </div>
          </div>
        </main>
    </AuthContextProvider>
    
  )
}

export default Layout;
