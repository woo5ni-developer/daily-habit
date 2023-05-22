import React, { FC, useEffect } from 'react'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Label from '../components/Label'

const HabitTerm: FC = () => {
  useEffect(() => {
    console.log('day', dayjs('2022-04-17'))
  })
  return (
    <div>
      <Label text="당신은 얼마나 오래 이 습관을 유지할건가요?" labelName="period" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={['DatePicker', 'MobileDatePicker', 'DesktopDatePicker', 'StaticDatePicker']}>
          <DemoItem>
            <div className="flex items-center">
              <DatePicker
                label="Start"
                className="!pr-2"
                format={'YYYY-MM-DD'}
                defaultValue={dayjs('2022-04-17')}
              />
              <i
                className="blockborder-gray-400 border-t-2
              w-4"></i>
              <DatePicker label="End" className="!pl-2" format={'YYYY-MM-DD'} />
            </div>
          </DemoItem>
          {/* <DemoItem label="Responsive variant">
          </DemoItem> */}
        </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}

export default HabitTerm
