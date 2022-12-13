import React, { FC } from 'react'
import Navigator from './Navigator'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  // const bgStyle = {
  //   backgroundImage: 'url(/images/progress.png)',
  //   backgroundSize: '12px',
  // }
  return (
    <div className="wrap overflow-hidden px-4 py-6 h-full min-h-screen">
      <div className="min-h-full">
        <main className="h-full">{children}</main>
        <Navigator />
      </div>
    </div>
  )
}

export default Layout
