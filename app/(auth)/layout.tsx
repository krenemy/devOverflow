import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
    <div className='flex min-h-screen w-full items-center justify-center'>{children}</div>
    </main>
  )
}

export default Layout