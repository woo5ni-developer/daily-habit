import React, { FC } from 'react'
import { IconContext } from 'react-icons'
import { IconType } from 'react-icons'

interface IconFieldProps {
  icon: IconType
}

const Home: FC<IconFieldProps> = ({ icon }) => {
  console.log('icon', icon)
  return (
    <div>
      Today Habit
      {/* habit 등록 */}
      <div>
        <img src="./images/bg/bg-home-habit.png" alt="" className="mx-auto" />
        <p className="text-[#d9d9d9] text-center pt-8">
          No Habit.
          <br />
          Click the &quot;+&quot; button
          <br />
          to add your first habit
        </p>
      </div>
      {/* 리스트 */}
      <div>
        <ul>
          <li className="pt-[17px] pb-[17px] pl-[22px] pr-[22px] shadow-[0_2px_11px_3px_rgba(0,0,0,0.06)] rounded-[12px]">
            <IconContext.Provider value={{ size: '30px', style: { padding: '3px' } }}>
              {React.createElement(icon)}
            </IconContext.Provider>
            <p>Swimming</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
