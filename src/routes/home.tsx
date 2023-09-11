import React, { FC, useEffect } from 'react'
import { IconContext } from 'react-icons'
import { useRecoilValue } from 'recoil'
import { habitListState } from '../state/dataState'
// import SelectDay from '../components/SelectDay'
import SelectDay from '../components/SelectDayTest'
import { iconList } from '../data/response'

const Home: FC = () => {
  const habitList = useRecoilValue(habitListState)

  useEffect(() => {
    // console.log('habitList', habitList)
  })

  return (
    <div>
      <SelectDay />
      <p className="text-lg text-dh-black pt-8">Today Habit</p>
      {/* 리스트 */}
      {habitList.length ? (
        <ul className="mt-3 overflow-y-scroll max-h-homeSroll">
          {habitList.map((item, idx) => {
            const target = iconList.find((icon) => icon.id === item.icon?.id)
            const iconItem = target ? target.icon : ''
            return (
              <li
                key={idx}
                className="pt-4 pb-4 pl-5 pr-5 rounded-xl flex items-center sibling:mt-2"
                style={{ background: item.color?.color ?? '' }}>
                <IconContext.Provider value={{ size: '30px', style: { padding: '3px' } }}>
                  {React.createElement(iconItem)}
                </IconContext.Provider>
                <p className="pl-4 text-lg font-bold">{item.title ?? ''}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <div>
          <img src="./images/bg/bg-home-habit.png" alt="" className="mx-auto" />
          <p className="text-dh-gray text-center pt-8">
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
