import { BaseSingleInputFieldProps, DateValidationError, FieldSection, UseDateFieldProps } from '@mui/x-date-pickers-pro'
import { Dayjs } from 'dayjs'
import { IconType } from 'react-icons'

export interface NavType {
  id: number
  title: string
  link: string
  pathName: string
}

export interface ColorType {
  id: number
  color: string
}

export interface RadioType {
  id: number
  text: string
  path: string
  bgWidth: string
}
export interface IconFieldType {
  id: number
  name: string
  icon: IconType
}

export interface habitItemType {
  id: number
  title: string
  icon: IconFieldType
  color: ColorType
  // time: RadioType | null
}

export interface ButtonFieldProps
  extends UseDateFieldProps<Dayjs>,
    BaseSingleInputFieldProps<Dayjs | null, FieldSection, DateValidationError> {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
