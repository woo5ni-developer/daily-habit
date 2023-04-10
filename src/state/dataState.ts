import { atom } from 'recoil'

export const nameState = atom<string>({
  key: 'nameState',
  default: '',
})
