import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { navList } from '../../data/response'

const Nav: FC = () => {
  const navigate = useNavigate()
  const handlePage = (link: string): void => {
    navigate(link)
  }
  return (
    <div>
      {navList.map((nav) => (
        <button className="border" key={nav.id} onClick={() => handlePage(nav.link)}>
          {nav.title}
        </button>
      ))}
    </div>
  )
}
export default Nav
