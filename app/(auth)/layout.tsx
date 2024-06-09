import React from 'react'

export const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='auth'>{children}</main>
  )
}
