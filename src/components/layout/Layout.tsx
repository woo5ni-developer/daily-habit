import React, { FC } from 'react'
import Nav from './Nav'
import { useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  return (
    <div className="wrap overflow-hidden px-6 py-8 h-full min-h-screen text-dh-black">
      <div className="min-h-full">
        <main className="h-full">{children}</main>
        {location.pathname.replace('/', '') !== 'set' && <Nav />}
      </div>
    </div>
  )
}

export default Layout
