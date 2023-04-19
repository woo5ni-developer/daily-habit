import React, { FC, useState } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import InputField from '../components/InputField'
import Title from '../components/Title'
import BackButton from '../components/BackButton'
import Cycle from '../components/Cycle'
import { colorList, radioList, iconList } from '../data/response'
import { ColorType, IconFieldType } from '../lib/type'
import ButtonIconField from '../components/ButtonIconField'

const Set: FC = () => {
  const [color, setColor] = useState<ColorType>({
    id: 0,
    color: '',
  })
  const SelectColor = (color: ColorType): void => {
    setColor(color)
  }
  const radioHandler = (selectValue: string): void => {
    console.log('selectValue ' + selectValue)
  }
  const SelectIcon = (icon: IconFieldType): void => {
    console.log(icon.icon)
  }
  return (
    <div>
      <Title text="New Habit" />
      <BackButton />
      <ButtonColorField data={colorList} handleClick={SelectColor} />
      <ButtonIconField data={iconList} handleClick={SelectIcon} />
      <InputField />
      <Cycle data={radioList} color={color} radioHandler={radioHandler} />
      <HabitTerm />
    </div>
  )
}

export default Set
