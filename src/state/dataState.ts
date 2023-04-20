import { atom } from 'recoil'
import { habitItemType } from '../lib/type'
import { initialIcon } from './initialState'

export const nameState = atom<string>({
  key: 'nameState',
  default: '',
})

export const habitItemState = atom<habitItemType | null>({
  key: 'iconState',
  default: initialIcon,
})
