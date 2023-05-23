import React, { FC } from 'react'

import Label from '../components/Label'
import DateRangePicker from './DateRangePicker'
import { today } from '../state/initialState'

interface HabitTermProps {
  handleChange: (data: string[]) => void
}

const HabitTerm: FC<HabitTermProps> = ({ handleChange }) => {
  const handleDateChage = (data: string[]): void => {
    handleChange(data)
  }
  return (
    <div>
      <Label text="당신은 얼마나 오래 이 습관을 유지할건가요?" labelName="period" />
      <DateRangePicker
        defaultStartDate={today()}
        defaultEndDate={''}
        onDateChage={handleDateChage}
      />
    </div>
  )
}

export default HabitTerm
