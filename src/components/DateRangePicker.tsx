import React, { FC, useEffect, useState } from 'react'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import {
  DateValidationError,
  LocalizationProvider,
  PickersActionBarProps,
} from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import dayjs from 'dayjs'
import { dateFormatState } from '../state/dataState'
import { useRecoilValue } from 'recoil'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { ButtonFieldProps } from '../lib/type'

interface DateRangePickerProps {
  defaultStartDate: string
  defaultEndDate: string
  onDateChage: (data: string[]) => void
  isHabitTermValid: (isValid: boolean) => void
}

const DateRangePicker: FC<DateRangePickerProps> = ({
  defaultStartDate,
  defaultEndDate,
  onDateChage,
  isHabitTermValid,
}) => {
  const dateFormat = useRecoilValue(dateFormatState)

  const [start, setStart] = useState(defaultStartDate)
  const [end, setEnd] = useState(defaultEndDate)
  const [period, setPeriod] = useState([''])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = useState<any | null>(null)

  const [open, setOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [slots, setSlots] = useState<any | null>(null)

  useEffect(() => {
    setPeriod([start, end])
    const endSlots = end ? { actionBar: ActionList } : { actionBar: ActionList, field: ButtonField }

    setSlots(endSlots)
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

  const handleNoEnd = (onCancel: () => void): void => {
    onCancel()
    setValue(null)
    setEnd('')
  }

  const ActionList = (props: PickersActionBarProps): JSX.Element => {
    const { onAccept, onCancel, className } = props
    const actions = [
      { text: 'No End', method: () => handleNoEnd(onCancel) },
      { text: 'OK', method: onAccept },
    ]
    return (
      <ButtonGroup className={`${className} !justify-end !p-2`}>
        {actions.map(({ text, method }) => (
          <Button className={'!min-w-16'} variant="text" key={text} onClick={method}>
            {text}
          </Button>
        ))}
      </ButtonGroup>
    )
  }

  const handleError = (error: DateValidationError): void => {
    if (error === 'minDate') {
      // 에러 있는 경우
      isHabitTermValid(false)
      return
    }

    // 에러 해결된 경우(null)
    isHabitTermValid(true)
  }

  const ButtonField = (props: ButtonFieldProps): JSX.Element => {
    // 첫 화면에서 NO END버튼
    const { id } = props

    return (
      <div className="!pl-2 !flex-1 text-dh-gray-400">
        <Button
          variant="outlined"
          className="w-full !px-3 !py-3 !justify-start"
          id={id}
          disabled={false}
          size={'large'}
          color="inherit"
          onClick={() => setOpen((prev) => !prev)}>
          <span className="text-dh-gray-500">No End!!!</span>
        </Button>
      </div>
    )
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker', 'MobileDatePicker', 'DesktopDatePicker', 'StaticDatePicker']}>
        <DemoItem>
          <div className="flex items-center">
            <DatePicker
              label="Start"
              className="!pr-2 !flex-1"
              format={dateFormat}
              defaultValue={dayjs(start)}
              onAccept={handleStartChange}
            />
            <i
              className="blockborder-gray-400 border-t-2
              w-4"
            />
            <DatePicker
              label="End"
              className="!pl-2 !flex-1"
              format={dateFormat}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              onAccept={handleEndChange}
              minDate={dayjs(start)}
              slots={slots}
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              onError={(error) => handleError(error)}
              slotProps={{ field: { id: 'End' } as never }}
            />
          </div>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default DateRangePicker
