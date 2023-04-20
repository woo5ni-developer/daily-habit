import React, { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateRange } from '@mui/x-date-pickers-pro'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import Label from '../components/Label'

interface HabitTermProps {
  selectTerm: (value: Date) => void
}

const HabitTerm: FC<HabitTermProps> = () => {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([dayjs(new Date()), dayjs(new Date())])
  return (
    <div>
      <Label text="당신은 얼마나 오래 이 습관을 유지할건가요?" labelName="period" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangePicker']}>
          <DemoItem component="DateRangePicker">
            <DateRangePicker value={value} onChange={(newValue) => setValue(newValue)} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}

export default HabitTerm
