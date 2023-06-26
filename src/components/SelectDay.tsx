import React, { FC, useEffect, useState } from 'react'
import Title from './Title'

const SelectDay: FC = () => {
  // logic
  const currentDate = new Date()
  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일']

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

  // Calculate the start date of the current week (Monday)
  const startDate = new Date(currentDate)
  startDate.setDate(startDate.getDate() - startDate.getDay() + 1)
  const monthName = monthNames[startDate.getMonth()]

  // Handle month transitions
  const previousMonth = startDate.getMonth() - 1
  const lastDayOfPreviousMonth = new Date(startDate.getFullYear(), previousMonth, 0).getDate()

  const [currentId, setCurrentId] = useState(0)
  //currentId: 값
  //setCurrntId: 값을 바꿔주는 함수

  //handle click Button
  const handleClick = (index: number): void => {
    setCurrentId(index)
  }

  return (
    <div className="mx-[-4px]">
      <Title text={monthName} />
      <div>
        {daysOfWeek.map((day, index) => {
          const date =
            (startDate.getDate() + index) % lastDayOfPreviousMonth || lastDayOfPreviousMonth
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
