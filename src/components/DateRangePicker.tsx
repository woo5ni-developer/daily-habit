import React, { FC, useEffect, useState } from 'react'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { dateFormatState } from '../state/dataState'
import { useRecoilValue } from 'recoil'
import { today } from '../state/initialState'

interface DateRangePickerProps {
  onDateChage: (data: string[]) => void
}

const DateRangePicker: FC<DateRangePickerProps> = ({ onDateChage }) => {
  const dateFormat = useRecoilValue(dateFormatState)

  const [start, setStart] = useState(today())
  const [end, setEnd] = useState(today())
  const [period, setPeriod] = useState([''])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = React.useState<any | null>(null)

  useEffect(() => {
    setPeriod([start, end])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end])

  useEffect(() => {
    onDateChage(period)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period])

  const formatDate = (newValue: dayjs.Dayjs): string => {
    const month = newValue.month() + 1
    const formatMonth = month > 9 ? month : '0' + month
    const formatdate = newValue.date() > 9 ? newValue.date() : '0' + newValue.date()
    return `${newValue.year()}-${formatMonth}-${formatdate}`
  }

  const handleStartChange = (newValue: dayjs.Dayjs | null): void => {
    newValue && setStart(formatDate(newValue))
  }

  const handleEndChange = (newValue: dayjs.Dayjs | null): void => {
    newValue && setEnd(formatDate(newValue))
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker', 'MobileDatePicker', 'DesktopDatePicker', 'StaticDatePicker']}>
        <DemoItem>
          <div className="flex items-center">
            <DatePicker
              label="Start"
              className="!pr-2"
              format={dateFormat}
              defaultValue={dayjs(start)}
              onAccept={handleStartChange}
            />
            <i
              className="blockborder-gray-400 border-t-2
              w-4"></i>
            <DatePicker
              label="End"
              className="!pl-2"
              format={dateFormat}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              onAccept={handleEndChange}
              minDate={dayjs(start)}
            />
          </div>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default DateRangePicker
