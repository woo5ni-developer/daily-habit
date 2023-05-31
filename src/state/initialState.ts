import { colorList, iconList } from '../data/response'
import { habitItemType } from '../lib/type'
export const initialIcon: habitItemType = {
  id: 0,
  title: '',
  icon: iconList[0],
  color: colorList[0],
  term: []
  // time: null,
}

export const today = (): string => {
  const today = new Date()

  const year = today.getFullYear()
  const month = ('0' + (today.getMonth() + 1)).slice(-2)
  const day = ('0' + today.getDate()).slice(-2)

  const dateString = year + '-' + month  + '-' + day

  // 2023-05-01
  return dateString
}

export const initialTerm: string[] = [today(), today()]