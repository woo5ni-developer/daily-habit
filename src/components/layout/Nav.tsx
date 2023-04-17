import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navList } from '../../data/response'

const Nav: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [urlPath, setUrlPath] = useState('')

  const handlePage = (link: string): void => {
    navigate(link)
  }
  const navStyles = {
    container: {
      backgroundImage: 'url("./images/bg/bg-nav.png")',
      width: '100%',
      height: '50px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '100% auto',
    },
  }

  useEffect(() => {
    const pathname = location.pathname.replace('/', '') || 'home'
    setUrlPath(pathname)
  })
  return (
    <div className="fixed bottom-0 left-0 w-full px-[24px] pb-[30px] pt-[36px]">
      <div style={navStyles.container} className="flex align-middle">
        {navList.map((nav) => (
          <button
            style={{
              backgroundImage: `url('/images/icon/${nav.pathName}${
                urlPath === nav.pathName ? '-active' : ''
              }.png')`,
            }}
            className={`bg-no-repeat bg-center flex-1 ${
              nav.title === 'Set' ? 'relative top-[-36px]' : ''
            }`}
            aria-label={nav.title}
            key={nav.id}
            onClick={() => handlePage(nav.link)}></button>
        ))}
      </div>
    </div>
  )
}
export default Nav
