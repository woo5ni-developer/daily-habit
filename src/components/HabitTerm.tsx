import React, { FC, useState } from 'react'
import Label from '../components/Label'

const HabitTerm: FC = () => {
  const [startValue, setStartValue] = useState('')
  const [endValue, setEndValue] = useState('')
  return (
    <div>
      <Label text="당신은 얼마나 오래 이 습관을 유지할건가요?" labelName="termStart" />
      <div className="border-[1px] inline-block relative">
        <label htmlFor="termStart" className="absolute bg-[#ffffff] text-[12px]">
          start
        </label>
        <input
          type="date"
          id="termStart"
          className="h-[42px]"
          value={startValue}
          onChange={(event) => setStartValue(event.target.value)}
        />
      </div>
      <div className="border-[1px] inline-block relative ml-[10px]">
        <label htmlFor="termEnd" className="absolute bg-[#ffffff] text-[12px]">
          End
        </label>
        <input
          type="date"
          id="termEnd"
          className="h-[42px]"
          value={endValue}
          onChange={(event) => setEndValue(event.target.value)}
        />
      </div>
    </div>
  )
}

export default HabitTerm
