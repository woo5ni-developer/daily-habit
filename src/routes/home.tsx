import React, { FC, useEffect } from 'react'
import { IconContext } from 'react-icons'
import { useRecoilValue } from 'recoil'
import { habitListState } from '../state/dataState'
import SelectDay from '../components/SelectDay'
import { iconList } from '../data/response'

const Home: FC = () => {
  const habitList = useRecoilValue(habitListState)

  useEffect(() => {
    console.log('habitList', habitList)
  })

  return (
    <div>
      <SelectDay />
      {/* 리스트 */}
      {habitList.length ? (
        <ul>
          {habitList.map((item, idx) => {
            const target = iconList.find((icon) => icon.id === item.icon?.id)
            const iconItem = target ? target.icon : ''
            return (
              <li
                key={idx}
                className="pt-[17px] pb-[17px] pl-[22px] pr-[22px] shadow-[0_2px_11px_3px_rgba(0,0,0,0.06)] rounded-[12px] flex items-center"
                style={{ background: item.color?.color ?? '' }}>
                <IconContext.Provider value={{ size: '30px', style: { padding: '3px' } }}>
                  {React.createElement(iconItem)}
                </IconContext.Provider>
                <p>{item.title ?? ''}</p>
              </li>
            )
          })}
        </ul>
      ) : (
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
      )}
      {/* <div>
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
      </div> */}
    </div>
  )
}

export default Home
