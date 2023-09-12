// import { colorList, iconList } from '../data/response'

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