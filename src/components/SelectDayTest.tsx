import React, { FC, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Title from './Title'
import { habitListState } from '../state/dataState'

const SelectDay: FC = () => {
  // 현재 날짜, 요일 배열, 월 이름 배열
  const currentDate = new Date('2023-03-01')
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

  // Recoil
  const habitList = useRecoilValue(habitListState)

  // useState
  const [state, setState] = useState({
    selectedDate: null as number | null, //선택된 날짜, 초기값: null을 설정
    selectedYear: currentDate.getFullYear(), //선택된 연도, 초기값: 현재 연도
    currentId: currentDate.getDay(), //요일의 index, 초기값: 현재 요일의 index
    startDate: (() => {
      const startDate = new Date(currentDate)
      startDate.setDate(startDate.getDate() - startDate.getDay())
      return startDate
    })(), //주의 시작 날짜를 나타내는 변수로, 초기값: 현재 날짜에서 현재 요일의 차를 뺀 값을 설정
    monthName: monthNames[currentDate.getMonth()], //현재 월의 이름을 나타내는 변수, 초기값: 현재 월
  })

  // 현재 월의 마지막 날짜 계산
  const lastDayOfCurrentMonth = new Date(
    state.startDate.getFullYear(),
    state.startDate.getMonth() + 1,
    0,
  ).getDate()

  // useEffect
  useEffect(() => {
    setState((prevState) => ({ ...prevState, currentId: currentDate.getDay() })) //요일업데이트
  }, [])

  // 날짜 버튼 클릭 이벤트
  const handleClick = (index: number): void => {
    setState((prevState) => {
      const startDate = new Date(prevState.startDate)
      startDate.setDate(startDate.getDate() + index)

      const date = startDate.getDate()
      const month = startDate.getMonth() + 1
      const year = startDate.getFullYear()
      const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(
        2,
        '0',
      )}`
      const monthName = monthNames[month - 1]

      return {
        ...prevState,
        currentId: index,
        selectedDate: date,
        selectedYear: year,
        clickedDate: date,
        clickedMonth: month,
        monthName,
      }
    })
  }

  return (
    <div className="mx-[-4px]">
      <Title text={state.monthName} />
      <div>
        {daysOfWeek.map((day, index) => {
          const date =
            (state.startDate.getDate() + index) % lastDayOfCurrentMonth || lastDayOfCurrentMonth
          const isCurrentDate = date === currentDate.getDate()
          return (
            <div
              key={index}
              className="relative pt-[8px] inline-block mx-[4px]"
              style={{ width: 'calc((100% / 7) - 8px)' }}>
              {isCurrentDate && (
                <i className="absolute block w-[4px] h-[4px] radius-[4px] top-0 left-[50%] bg-dh-green"></i>
              )}
              <button
                className={`w-full h-[40px] rounded-[10px] border border-solid text-[#1E1E1E] font-bold text-[14px] ${
                  state.currentId === index ? 'bg-dh-green' : ''
                }`}
                onClick={() => handleClick(index)}>
                {day}
              </button>
              <span className="block text-center text-dh-gray text-[14px]">{date}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectDay
