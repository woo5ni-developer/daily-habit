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

export interface IconFieldType {
  id: number
  name: string
  icon: IconType
}
