import { ColorType, NavType, RadioType } from '../lib/type'

export const navList: NavType[] = [
  { id: 1, title: 'Home', link: '/', path: './images/icon/icon-nav-home.png' },
  { id: 2, title: 'Tracker', link: '/tracker', path: './images/icon/icon-nav-tracker.png' },
  { id: 3, title: 'Set', link: '/set', path: './images/icon/icon-nav-set.png' },
  { id: 4, title: 'Stats', link: '/stats', path: './images/icon/icon-nav-status.png' },
  { id: 5, title: 'Setting', link: '/setting', path: './images/icon/icon-nav-setting.png' },
]

export const colorList: ColorType[] = [
  { id: 1, color: '#4CFCE1' },
  { id: 2, color: '#D65DB1' },
  { id: 3, color: '#FF6F91' },
  { id: 4, color: '#FF9671' },
  { id: 5, color: '#FFC75F' },
  { id: 6, color: '#F9F871' },
  { id: 7, color: '#00C9A7' },
  { id: 8, color: '#FBEAFF' },
  { id: 9, color: '#0089BA' },
  { id: 10, color: '#0081CF' },
  { id: 11, color: '#2C73D2' },
  { id: 12, color: '#B39CD0' },
  { id: 13, color: '#4D8076' },
  { id: 14, color: '#845EC2' },
]

export const radioList: RadioType[] = [
  {
    id: 1,
    text: 'Morning',
    path: './images/icon/icon-radio-sun.png',
    bgWidth: '19px 18px',
  },
  {
    id: 2,
    text: 'Evening',
    path: './images/icon/icon-radio-evening.png',
    bgWidth: '22px 22px',
  },
  {
    id: 3,
    text: 'Night',
    path: './images/icon/icon-radio-night.png',
    bgWidth: '18px 18px',
  },
  {
    id: 4,
    text: 'Always',
    path: './images/icon/icon-radio-infinite.png',
    bgWidth: '22px 22px',
  },
]
