import React, { FC, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Title from './Title'
import { habitListState } from '../state/dataState'
import { CurrentWeekType } from '../lib/type'

const SelectDay: FC = () => {
  // logic
  const [currentWeek, setCurrentWeek] = useState<CurrentWeekType[]>([])
  const [selectDay, setSelectDay] = useState<CurrentWeekType | null>(null)

  // useRecoilValue
  const habitList = useRecoilValue(habitListState)

  // init 변수
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

  const initWeeklyCalender = (): void => {
    // month: 1월이 0부터 시작함
    // Sunday - Saturday : 0 - 6
    const currentDay = new Date('2023-08-01')
    // const currentDay = new Date()
    const theYear = currentDay.getFullYear()
    const theMonth = currentDay.getMonth()
    const theDate = currentDay.getDate()
    const theDayOfWeek = currentDay.getDay() // 일~월 기준
    // const theDayOfWeek = currentDay.getDay() ? currentDay.getDay() - 1 : 6 // 월~일 기준

    const resultWeeklyDates = daysOfWeek.map((day, i) => {
      // new Date(year, monthIndex, day);
      // 현재 날짜 기준으로 이번주 일~토 7일 구하기
      const resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek))
      // console.log('🚀 : ', theDate, i, theDayOfWeek, theDate + (i - theDayOfWeek))
      const year = resultDay.getFullYear()
      const month: number | string = Number(resultDay.getMonth()) + 1
      const date: number | string = resultDay.getDate()
      const dayIndex = resultDay.getDay()

      // 앞에 0붙이기
      const mm = String(month).length === 1 ? '0' + month : month
      const dd = String(date).length === 1 ? '0' + date : date

      const totalDate = `${year}-${mm}-${dd}`

      return {
        id: dayIndex,
        day,
        year,
        month,
        date,
        isToday: checkEqualToday(totalDate),
        totalDate,
      }
    })
    setCurrentWeek(resultWeeklyDates)
  }

  const checkEqualToday = (totalDate: string): boolean => {
    const today = new Date()

    const yyyy = today.getFullYear()
    let mm: number | string = today.getMonth() + 1
    let dd: number | string = today.getDate()

    mm = String(mm).length === 1 ? '0' + mm : mm
    dd = String(dd).length === 1 ? '0' + dd : dd

    const resultDate = `${yyyy}-${mm}-${dd}`

    return resultDate === totalDate
  }

  const initSelectDay = (data: CurrentWeekType[]): void => {
    const today = data.find((item) => item.isToday)
    data.length && today && setSelectDay(today)
  }

  // Handle click Button
  const handleClick = (data: CurrentWeekType): void => {
    setSelectDay(data)
  }

  useEffect(() => {
    console.log('habitList', habitList.length)
  })

  useEffect(() => {
    initWeeklyCalender()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    initSelectDay(currentWeek)
  }, [currentWeek])

  return (
    <div className="mx-[-4px]">
      <Title text={selectDay ? monthNames[selectDay?.month - 1] : ''} />
      <div>
        {currentWeek.map((data, index) => {
          return (
            <div
              key={index}
              className="relative pt-[8px] inline-block mx-[4px]"
              style={{ width: 'calc((100% / 7) - 8px)' }}>
              {/* 오늘 날짜 표시 */}
              <i
                className={`absolute block w-[4px] h-[4px] radius-[4px] top-0 left-[18px] ${
                  data.isToday ? 'bg-dh-green' : ''
                }`}></i>
              {/* 오늘 날짜 표시 */}
              {/* 사용자 선택시 버튼에 'bg-dh-green' 클래스 붙이기 */}
              <button
                className={`w-full h-[40px] rounded-[10px] border border-solid text-[#1E1E1E] font-bold text-[14px] ${
                  data.id === selectDay?.id ? 'bg-dh-green' : ''
                }`}
                onClick={() => handleClick(data)}>
                {data.day}
              </button>
              <span className="block text-center text-dh-gray text-[14px]">{data.date}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectDay
