import React, { FC, useState } from 'react'
import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import Label from '../components/Label'

const HabitTerm: FC = () => {
  return (
    <div>
      <Label text="당신은 얼마나 오래 이 습관을 유지할건가요?" labelName="period" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangePicker']}>
          <DateRangePicker
            localeText={{ start: 'Start', end: 'End' }}
            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}

export default HabitTerm
