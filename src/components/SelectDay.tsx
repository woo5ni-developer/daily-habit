import React, { FC, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Title from './Title'
import { habitListState } from '../state/dataState'

const SelectDay: FC = () => {
  // logic
  // init 변수
  const currentDate = new Date()
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // useRecoilValue
  const habitList = useRecoilValue(habitListState)

  //useState
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedYear, setSelectedYear] = useState<number>(currentDate.getFullYear())
  const [currentId, setCurrentId] = useState(0)

  useEffect(() => {
    console.log('habitList', habitList)
    console.log('selectedDate', selectedDate)
    console.log('selectedYear', selectedYear)
  })

  useEffect(() => {
    setCurrentId(currentDate.getDay())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Calculate the start date of the current week (Monday)
  const startDate = new Date(currentDate)
  startDate.setDate(startDate.getDate() - startDate.getDay())
  const monthName = monthNames[startDate.getMonth()] // -> useState바꾸기

  // Calculate the last day of the current month
  const nextMonth = startDate.getMonth() + 1
  const firstDayOfNextMonth = new Date(startDate.getFullYear(), nextMonth, 1)
  const lastDayOfCurrentMonth = new Date(
    firstDayOfNextMonth.getFullYear(),
    firstDayOfNextMonth.getMonth(),
    0,
  ).getDate()

  // Handle click Button
  const handleClick = (index: number): void => {
    setCurrentId(index)
    const clickedDate =
      (startDate.getDate() + index) % lastDayOfCurrentMonth || lastDayOfCurrentMonth
    setSelectedDate(clickedDate)
    setSelectedYear(startDate.getFullYear())
  }

  return (
    <div className="mx-[-4px]">
      <Title text={monthName} />
      <div>
        {daysOfWeek.map((day, index) => {
          const date =
            (startDate.getDate() + index) % lastDayOfCurrentMonth || lastDayOfCurrentMonth
          const isCurrentDate = date === currentDate.getDate()
          return (
            <div
              key={index}
              className="relative pt-[8px] inline-block mx-[4px]"
              style={{ width: 'calc((100% / 7) - 8px)' }}>
              {isCurrentDate && (
                <i className="absolute block w-[4px] h-[4px] radius-[4px] top-0 left-[18px] bg-dh-green"></i>
              )}
              <button
                className={`w-full h-[40px] rounded-[10px] border border-solid text-[#1E1E1E] font-bold text-[14px] ${
                  currentId === index ? 'bg-dh-green' : ''
                }`}
                onClick={() => handleClick(index)}>
                {day}
              </button>
              <span className="block text-center text-dh-gray text-[14px]">{date}</span>
              {/* Add your logic here to display events or appointments for each day */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectDay
