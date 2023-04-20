import React, { FC } from 'react'
import { IconContext } from 'react-icons'
import { IconType } from 'react-icons'
import { useRecoilValue } from 'recoil'
import { habitItemState } from '../state/dataState'
import Title from '../components/Title'
import SelectDay from '../components/SelectDay'

const Home: FC = () => {
  const habit = useRecoilValue(habitItemState)
  console.log(habit?.color)
  return (
    <div>
      <Title text="April" />
      <SelectDay />
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
          <li
            className="pt-[17px] pb-[17px] pl-[22px] pr-[22px] shadow-[0_2px_11px_3px_rgba(0,0,0,0.06)] rounded-[12px] flex items-center"
            style={{ background: habit?.color?.color ?? '' }}>
            <IconContext.Provider value={{ size: '30px', style: { padding: '3px' } }}>
              {habit?.icon ? React.createElement(habit.icon.icon) : null}
            </IconContext.Provider>
            <p>{habit?.title ?? ''}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
