import { atom } from 'recoil'
import { habitItemType } from '../lib/type'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const habitListState = atom<habitItemType[]>({
  key: 'habitListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const dateFormatState = atom<string>({
  key: 'dateFormatState',
  default: 'YYYY-MM-DD',
})
