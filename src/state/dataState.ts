import { atom } from 'recoil'
import { habitItemType } from '../lib/type'
import { initialHabitList } from './initialState'

export const nameState = atom<string>({
  key: 'nameState',
  default: '',
})

export const habitListState = atom<habitItemType[]>({
  key: 'habitListState',
  default: initialHabitList,
})

export const dateFormatState = atom<string>({
  key: 'dateFormatState',
  default: 'YYYY-MM-DD'
})
