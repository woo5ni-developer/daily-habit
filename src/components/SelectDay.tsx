import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { habitItemState } from '../state/dataState'
import Title from './Title'

const SelectDay: FC = () => {
  const habit = useRecoilValue(habitItemState)
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

  return (
    <div className="mx-[-4px]">
      <Title text={monthName} />
      <div>
        {daysOfWeek.map((day, index) => {
          const date =
            (startDate.getDate() + index) % lastDayOfPreviousMonth || lastDayOfPreviousMonth
          const isCurrentDate = date === currentDate.getDate()
          const className = isCurrentDate ? 'bg-[#4CFCE1]' : ''

          return (
            <div
              key={index}
              className="relative pt-[8px] inline-block mx-[4px]"
              style={{ width: 'calc((100% / 7) - 8px)' }}>
              {isCurrentDate && (
                <i className="absolute block w-[4px] h-[4px] radius-[4px] top-0 left-[18px] bg-[#4CFCE1]"></i>
              )}
              <button
                className={`w-full h-[40px] rounded-[10px] border border-solid text-[#1E1E1E] font-bold text-[14px] ${className}`}>
                {day}
              </button>
              <span className="block text-center text-[#d9d9d9] text-[14px]">{date}</span>
              {/* Add your logic here to display events or appointments for each day */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectDay
