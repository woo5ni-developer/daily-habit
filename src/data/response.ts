import { ColorType, NavType, IconFieldType } from '../lib/type'

//icon
import { FaSwimmer } from 'react-icons/fa'
import { GiMuscleUp } from 'react-icons/gi'

//nav
export const navList: NavType[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    path: './images/icon/icon-nav-home.png',
    selectedPath: './images/icon/icon-nav-home-active.png',
  },
  {
    id: 2,
    title: 'Tracker',
    link: '/tracker',
    path: './images/icon/icon-nav-tracker.png',
    selectedPath: './images/icon/icon-nav-tracker-active.png',
  },
  { id: 3, title: 'Set', link: '/set', path: './images/icon/icon-nav-set.png', selectedPath: '' },
  {
    id: 4,
    title: 'Stats',
    link: '/stats',
    path: './images/icon/icon-nav-status.png',
    selectedPath: './images/icon/icon-nav-status-active.png',
  },
  {
    id: 5,
    title: 'Setting',
    link: '/setting',
    path: './images/icon/icon-nav-setting.png',
    selectedPath: './images/icon/icon-nav-setting-active.png',
  },
]

//color
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

//icon
export const iconList: IconFieldType[] = [
  {
    id: 0,
    name: 'Swimmer',
    icon: FaSwimmer,
  },
  {
    id: 1,
    name: 'MuscleUp',
    icon: GiMuscleUp,
  },
  {
    id: 3,
    name: 'MuscleUp',
    icon: GiMuscleUp,
  },
  {
    id: 4,
    name: 'MuscleUp',
    icon: GiMuscleUp,
  },
  {
    id: 5,
    name: 'MuscleUp',
    icon: GiMuscleUp,
  },
]
