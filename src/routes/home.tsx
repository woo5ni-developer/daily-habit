import React, { FC, useEffect, useState } from 'react'

import { useRecoilValue } from 'recoil'
import { habitListState } from '../state/dataState'
import HabitWeek from '../components/HabitWeek'
import { iconList } from '../data/response'
import { CurrentWeekType, habitItemType } from '../lib/type'
import HabitItem from '../components/HabitItem'

const Home: FC = () => {
  const habitList = useRecoilValue(habitListState)

  const [filterHabitList, setFilterHabitList] = useState<habitItemType[]>([])

  const diffDayParent = (data: CurrentWeekType): void => {
    const comparisonResults = habitList.reduce((acc, current): habitItemType[] => {
      const { term } = current
      if (term.some((data) => data === '')) {
        // start가 target보다 이전날짜거나 같으면 true 아니면 false
        return new Date(data.totalDate) >= new Date(term[0]) ? [...acc, current] : [...acc]
      }
      return new Date(data.totalDate) >= new Date(term[0]) &&
        new Date(data.totalDate) <= new Date(term[1])
        ? [...acc, current]
        : [...acc]

      // return [...acc]
    }, [] as habitItemType[])
    setFilterHabitList(comparisonResults)
  }

  useEffect(() => {
    // console.log('habitList', habitList)
  })

  return (
    <div>
      <HabitWeek diffDay={diffDayParent} />

      {/* 리스트 */}
      {filterHabitList.length ? (
        <>
          <p className="text-lg text-dh-black pt-8">Today Habit</p>
          <ul className="mt-3 overflow-y-scroll max-h-homeSroll">
            {filterHabitList.map((item, idx) => {
              const target = iconList.find((icon) => icon.id === item.icon?.id)
              console.log('target', target)
              const iconItem = target ? target.icon : ''
              console.log('iconItem', iconItem)
              return <HabitItem key={idx} habit={item} iconItem={iconItem} />
            })}
          </ul>{' '}
        </>
      ) : (
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="./images/bg/bg-home-habit.svg" alt="" className="mx-auto" />
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
