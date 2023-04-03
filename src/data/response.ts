import { ColorType, NavType, IconFieldType } from '../lib/type'

//icon
import {
  FaSwimmer,
  FaRunning,
  FaTableTennis,
  FaGuitar,
  FaChurch,
  FaHospital,
  FaCalendarCheck,
} from 'react-icons/fa'
import {
  GiMuscleUp,
  GiMountainClimbing,
  GiBasketballBasket,
  GiTennisBall,
  GiBowlingPin,
  GiGolfFlag,
  GiWaterDrop,
} from 'react-icons/gi'
import { GrYoga } from 'react-icons/gr'
import { BiCycling, BiTime, BiCoffee } from 'react-icons/bi'
import { SlNotebook } from 'react-icons/sl'
import { SiNike } from 'react-icons/si'
import { RiComputerFill } from 'react-icons/ri'
import {
  IoFootball,
  IoHeadsetSharp,
  IoFastFoodOutline,
  IoAirplane,
  IoBeerOutline,
  IoCarSportSharp,
  IoCartSharp,
  IoColorPaletteSharp,
  IoGlasses,
  IoHappyOutline,
  IoHeartCircleSharp,
  IoLogoYoutube,
  IoUmbrellaOutline,
  IoWine,
  IoWatch,
} from 'react-icons/io5'

//nav
export const navList: NavType[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    pathName: 'home',
  },
  {
    id: 2,
    title: 'Tracker',
    link: '/tracker',
    pathName: 'tracker',
  },
  {
    id: 3,
    title: 'Set',
    link: '/set',
    pathName: 'set',
  },
  {
    id: 4,
    title: 'Stats',
    link: '/stats',
    pathName: 'stats',
  },
  {
    id: 5,
    title: 'Setting',
    link: '/setting',
    pathName: 'setting',
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
    name: 'Running',
    icon: FaRunning,
  },
  {
    id: 4,
    name: 'MountainClimbing',
    icon: GiMountainClimbing,
  },
  {
    id: 5,
    name: 'BasketballBasket',
    icon: GiBasketballBasket,
  },
  {
    id: 6,
    name: 'TennisBall',
    icon: GiTennisBall,
  },
  {
    id: 7,
    name: 'Yoga',
    icon: GrYoga,
  },
  {
    id: 8,
    name: 'Cycling',
    icon: BiCycling,
  },
  {
    id: 9,
    name: 'TableTennis',
    icon: FaTableTennis,
  },
  {
    id: 10,
    name: 'Football',
    icon: IoFootball,
  },
  {
    id: 11,
    name: 'BowlingPin',
    icon: GiBowlingPin,
  },
  {
    id: 12,
    name: 'GolfFlag',
    icon: GiGolfFlag,
  },
  {
    id: 13,
    name: 'Guitar',
    icon: FaGuitar,
  },
  {
    id: 14,
    name: 'Church',
    icon: FaChurch,
  },
  {
    id: 15,
    name: 'WaterDrop',
    icon: GiWaterDrop,
  },
  {
    id: 16,
    name: 'HeadsetSharp',
    icon: IoHeadsetSharp,
  },
  {
    id: 17,
    name: 'Notebook',
    icon: SlNotebook,
  },
  {
    id: 18,
    name: 'ComputerFill',
    icon: RiComputerFill,
  },
  {
    id: 19,
    name: 'FastFoodOutline',
    icon: IoFastFoodOutline,
  },
  {
    id: 20,
    name: 'Airplane',
    icon: IoAirplane,
  },
  {
    id: 21,
    name: 'BeerOutline',
    icon: IoBeerOutline,
  },
  {
    id: 22,
    name: 'CarSportSharp',
    icon: IoCarSportSharp,
  },
  {
    id: 23,
    name: 'CartSharp',
    icon: IoCartSharp,
  },
  {
    id: 24,
    name: 'ColorPaletteSharp',
    icon: IoColorPaletteSharp,
  },
  {
    id: 25,
    name: 'Glasses',
    icon: IoGlasses,
  },
  {
    id: 26,
    name: 'HappyOutline',
    icon: IoHappyOutline,
  },
  {
    id: 27,
    name: 'HeartCircleSharp',
    icon: IoHeartCircleSharp,
  },
  {
    id: 28,
    name: 'LogoYoutube',
    icon: IoLogoYoutube,
  },
  {
    id: 29,
    name: 'UmbrellaOutline',
    icon: IoUmbrellaOutline,
  },
  {
    id: 30,
    name: 'Wine',
    icon: IoWine,
  },
  {
    id: 31,
    name: 'Watch',
    icon: IoWatch,
  },
  {
    id: 32,
    name: 'Hospital',
    icon: FaHospital,
  },
  {
    id: 33,
    name: 'CalendarCheck',
    icon: FaCalendarCheck,
  },
  {
    id: 34,
    name: 'Nike',
    icon: SiNike,
  },
  {
    id: 35,
    name: 'Time',
    icon: BiTime,
  },
  {
    id: 36,
    name: 'Coffee',
    icon: BiCoffee,
  },
]
