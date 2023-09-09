import React, { FC, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Title from './Title'
import { habitListState } from '../state/dataState'
import { CurrentWeekType, DateInfoType } from '../lib/type'

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
    const currentDay = new Date('2023-08-01')
    const { yyyy: theYear, mm: theMonth, dd: theDate, day: theDayOfWeek } = dateInfo(currentDay)

    const resultWeeklyDates = daysOfWeek.map((day, i) => {
      // new Date(year, monthIndex, day);
      // 현재 날짜 기준으로 이번주 일~토 7일 구하기
      const resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek))
      // console.log('🚀 : ', theDate, i, theDayOfWeek, theDate + (i - theDayOfWeek))
      const { yyyy, mm, dd, day: id } = dateInfo(resultDay)

      const totalDate = dateFormat({ yyyy, mm, dd, day: id })

      return {
        id,
        day,
        year: yyyy,
        month: mm + 1,
        date: dd,
        isToday: checkEqualToday(totalDate),
        totalDate,
      }
    })
    setCurrentWeek(resultWeeklyDates)
  }

  const checkEqualToday = (totalDate: string): boolean => {
    const today = new Date('2023-08-01')

    const { yyyy, mm, dd, day } = dateInfo(today)

    const resultDate = dateFormat({ yyyy, mm, dd, day })

    return resultDate === totalDate
  }

  const dateInfo = (targetDate: Date): DateInfoType => ({
    yyyy: targetDate.getFullYear(),
    mm: targetDate.getMonth(), // month: 1월이 0부터 시작함
    dd: targetDate.getDate(),
    // Sunday - Saturday : 0 - 6
    day: targetDate.getDay(), // 일~월 기준
    // day: targetDate.getDay() ? currentDay.getDay() - 1 : 6 // 월~일 기준
  })

  const dateFormat = ({ yyyy, mm, dd }: DateInfoType): string => {
    // 앞에 0붙이기
    return `${yyyy}-${String(mm + 1).length === 1 ? `0${mm + 1}` : mm + 1}-${
      String(dd).length === 1 ? `0${dd}` : dd
    }`
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
