import { atom } from 'recoil'
import { habitItemType } from '../lib/type'
import { initialIcon } from './initialState'

export const nameState = atom<string>({
  key: 'nameState',
  default: '',
})

export const habitItemState = atom<habitItemType>({
  key: 'iconState',
  default: initialIcon,
})

export const dateFormatState = atom<string>({
  key: 'dateFormatState',
  default: 'YYYY-MM-DD'
})
